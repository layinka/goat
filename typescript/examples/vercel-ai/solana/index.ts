import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";
import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { sendSOL, solana } from "@goat-sdk/wallet-solana";
import { Connection, Keypair } from "@solana/web3.js";
import { jupiter } from "@goat-sdk/plugin-jupiter";
import { splToken } from "@goat-sdk/plugin-spl-token";
import { coingecko } from "@goat-sdk/plugin-coingecko";
import base58 from "bs58";
import { Telegraf } from 'telegraf';

require("dotenv").config();

const connection = new Connection(process.env.SOLANA_RPC_URL as string);
const keypair = Keypair.fromSecretKey(base58.decode(process.env.SOLANA_PRIVATE_KEY as string));

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);

const userConversations = new Map<number, Message[]>();

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

const initTools = async () => {
    return await getOnChainTools({
        wallet: solana({
            keypair,
            connection,
        }),
        plugins: [sendSOL(), jupiter(), splToken(), coingecko({
            apiKey: process.env.COINGECKO_API_KEY as string
        })],
    });
};

bot.on('message', async (ctx) => {
    if (!ctx.message || !('text' in ctx.message)) return;

    const userId = ctx.message.from.id;
    const userInput = ctx.message.text;

    if (!userConversations.has(userId)) {
        userConversations.set(userId, []);
    }

    const conversationHistory = userConversations.get(userId)!;
    conversationHistory.push({ role: 'user', content: userInput });

    await ctx.sendChatAction('typing');

    try {
        const tools = await initTools();
        const result = await generateText({
            model: openai("gpt-4o-mini"),
            tools: tools,
            maxSteps: 10,
            prompt: `You are a crypto degen. You use crypto slang naturally and stay up to date with Solana ecosystem. You help me with my trades and provide market insights. Keep responses concise and use emojis occasionally. Be succint and do not sound like a boomer. 
Previous conversation:
${conversationHistory
    .map(m => `${m.role}: ${m.content}`)
    .join('\n')}

Current request: ${userInput}`,
            onStepFinish: (event) => {
                console.log('Tool execution:', event.toolResults);
            },
        });

        conversationHistory.push({ role: 'assistant', content: result.text });
        await ctx.reply(result.text);
    } catch (error) {
        console.error('Error:', error);
        await ctx.reply('Sorry, something went wrong. Please try again later.');
    }
});

bot.launch().then(() => {
    console.log('Bot is running!');
}).catch((err) => {
    console.error('Failed to start bot:', err);
});

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
