import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { http } from "viem";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { base, baseSepolia, sepolia } from "viem/chains";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";

import { crossmintHeadlessCheckout } from "@goat-sdk/plugin-crossmint-headless-checkout";
import { viem } from "@goat-sdk/wallet-viem";
import { z } from "zod";
import { worldstore } from "@goat-sdk/plugin-worldstore";

import * as readline from 'readline';

require("dotenv").config();

// Replace the ChatMessage import with this type
type ChatMessage = {
    role: 'user' | 'assistant';
    content: string;
};

const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);

const walletClient = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: base,
});

const MY_CROSSMINT_COLLECTION_ID = process.env.CROSSMINT_COLLECTION_ID as string;

// HEY! Fill me out based on the expected call data for the collection/contract you are using!
const myCallDataSchema = z.object({
    productId: z.string(),
    to: z.string(),
    quantity: z.string(),
    totalPrice: z.string(),
});

const userConversations: ChatMessage[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function chat() {
    const tools = await getOnChainTools({
        wallet: viem(walletClient),
        plugins: [
            worldstore(),
            crossmintHeadlessCheckout(
                {
                    apiKey: process.env.CROSSMINT_SERVER_API_KEY as string,
                },
                myCallDataSchema,
            ),
        ],
    });

    console.log("Chat with your crypto agent (type 'exit' to quit)");

    async function askQuestion(): Promise<void> {
        rl.question('You: ', async (input) => {
            if (input.toLowerCase() === 'exit') {
                rl.close();
                return;
            }

            userConversations.push({ role: 'user', content: input });

            try {
                const result = await generateText({
                    model: openai("gpt-4o"),
                    tools: tools,
                    maxSteps: 5,
                    prompt: `You are a helpful crypto agent that can help users buy NFTs.
                    The collection ID for purchases is 'crossmint:${MY_CROSSMINT_COLLECTION_ID}'.
                    
                    Available items:
                    - GOAT_MUG: A special NFT mug that costs 1 USD
                    
                    When helping users:
                    1. Use the worldstore plugin to search for items first
                    2. When buying, always use these exact parameters:
                       - productId: "GOAT_MUG"
                       - to: "${account.address}"
                       - quantity: "1"
                       - totalPrice: "1"
                    3. Always use the collection ID 'crossmint:${MY_CROSSMINT_COLLECTION_ID}'
                    4. Payment should be in USDC on Base network

                    Previous conversation:
                    ${userConversations
                        .map(m => `${m.role}: ${m.content}`)
                        .join('\n')}

                    Current request: ${input}`,
                });

                console.log('Agent:', result.text);
                userConversations.push({ role: 'assistant', content: result.text });
                await askQuestion();
            } catch (error) {
                console.error('Error:', error);
                await askQuestion();
            }
        });
    }

    await askQuestion();
}

chat().catch(console.error);
