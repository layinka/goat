import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { coingecko } from "@goat-sdk/plugin-coingecko";
import { jupiter } from "@goat-sdk/plugin-jupiter";
import { pumpfun } from "@goat-sdk/plugin-pumpfun";
import { splToken } from "@goat-sdk/plugin-spl-token";
import { SolanaWalletClient } from "@goat-sdk/wallet-solana";
import { solana } from "@goat-sdk/wallet-solana";
import { Connection, Keypair } from "@solana/web3.js";
import base58 from "bs58";
// @ts-ignore
import TelegramBot from "node-telegram-bot-api";
// @ts-ignore
import type { Message as TelegramMessage } from "node-telegram-bot-api";

require("dotenv").config();

const TOOLS = [
    {
        type: "function",
        function: {
            name: "getTokenBalance",
            description: "Get the balance of a specific token for a wallet address",
            parameters: {
                type: "object",
                properties: {
                    walletAddress: {
                        type: "string",
                        description: "The address to get the balance of",
                    },
                    mintAddress: {
                        type: "string",
                        description: "The mint address of the token to get the balance of",
                    },
                },
                required: ["mintAddress"],
            },
        },
    },
    {
        type: "function",
        function: {
            name: "getTrendingCoins",
            description: "Get trending coins from CoinGecko",
            parameters: {
                type: "object",
                properties: {},
                required: [],
            },
        },
    },
    {
        type: "function",
        function: {
            name: "swapTokens",
            description: "Swap tokens using Jupiter DEX",
            parameters: {
                type: "object",
                properties: {
                    inputMint: {
                        type: "string",
                        description: "The mint address of the input token",
                    },
                    outputMint: {
                        type: "string",
                        description: "The mint address of the output token",
                    },
                    amount: {
                        type: "number",
                        description: "The amount of input tokens to swap",
                    },
                    slippageBps: {
                        type: "number",
                        description: "The slippage in bps",
                        optional: true,
                    },
                },
                required: ["inputMint", "outputMint", "amount"],
            },
        },
    },
    {
        type: "function",
        function: {
            name: "createToken",
            description: "Create a new token using Pump.fun",
            parameters: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "The name of the token (e.g., 'My Token')",
                    },
                    symbol: {
                        type: "string",
                        description: "The token symbol (e.g., 'MTK')",
                    },
                    description: {
                        type: "string",
                        description: "A brief description of the token's purpose",
                    },
                    imageUrl: {
                        type: "string",
                        description: "URL to the token's logo image",
                    },
                    amountToBuyInSol: {
                        type: "number",
                        description: "Amount of SOL to initially buy the token with",
                    },
                    slippage: {
                        type: "number",
                        description: "Slippage tolerance percentage (default: 1)",
                        optional: true,
                    },
                    priorityFee: {
                        type: "number",
                        description: "Transaction priority fee in lamports (default: 1)",
                        optional: true,
                    },
                },
                required: ["name", "symbol", "description", "imageUrl", "amountToBuyInSol"],
            },
        },
    },
];

// Validate and secure environment variables
const getEnvVar = (name: string): string => {
    const value = process.env[name];
    if (!value?.trim()) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    const isSensitive =
        name.toLowerCase().includes("key") ||
        name.toLowerCase().includes("token") ||
        name.toLowerCase().includes("seed") ||
        name.toLowerCase().includes("secret") ||
        name.toLowerCase().includes("password") ||
        name.toLowerCase().includes("private");

    if (isSensitive) {
        if (value.length < 16) {
            throw new Error(`Invalid format for sensitive environment variable: ${name}`);
        }
        console.log(`[ENV] Loaded sensitive variable ${name} (value redacted)`);
    } else {
        console.log(`[ENV] Loaded ${name}`);
    }

    return value;
};

const ENV = {
    RPC_PROVIDER_URL: getEnvVar("RPC_PROVIDER_URL"),
    SOLANA_WALLET_SEED: getEnvVar("SOLANA_WALLET_SEED"),
    OPENROUTER_API_KEY: getEnvVar("OPENROUTER_API_KEY"),
    TELEGRAM_BOT_TOKEN: getEnvVar("TELEGRAM_BOT_TOKEN"),
    COINGECKO_API_KEY: getEnvVar("COINGECKO_API_KEY"),
} as const;

// Verify environment variables are loaded but never log their values
const validateEnv = () => {
    const requiredEnvVars = [
        "RPC_PROVIDER_URL",
        "SOLANA_WALLET_SEED",
        "OPENROUTER_API_KEY",
        "TELEGRAM_BOT_TOKEN",
        "COINGECKO_API_KEY",
    ];

    for (const key of requiredEnvVars) {
        if (!ENV[key as keyof typeof ENV]?.trim()) {
            throw new Error(`Critical environment variable ${key} is missing or empty`);
        }
    }
};

validateEnv();

// Initialize blockchain connection and wallet without logging sensitive details
const connection = new Connection(ENV.RPC_PROVIDER_URL);
const keypair = Keypair.fromSecretKey(base58.decode(ENV.SOLANA_WALLET_SEED));
console.log("[INIT] Blockchain connection and wallet initialized successfully");

type Role = "user" | "assistant" | "system" | "function";

interface Message {
    role: Role;
    content: string;
    name?: string;
    tool_calls?: Array<{
        id: string;
        type: "function";
        function: {
            name: string;
            arguments: string;
        };
    }>;
}

interface ToolCall {
    id: string;
    type: "function";
    function: {
        name: string;
        arguments: string;
    };
}

interface ToolMethodResult {
    content: string;
    [key: string]: unknown;
}

type ToolMethod = {
    execute: <T extends ToolMethodResult>(
        method: string,
        wallet?: SolanaWalletClient,
        params?: Record<string, unknown>,
    ) => Promise<T>;
};

interface ToolServices {
    splToken: ToolMethod;
    coingecko: ToolMethod;
    jupiter: ToolMethod;
    pumpfun: ToolMethod;
}

async function executeBlockchainTool(toolCall: ToolCall, walletClient: SolanaWalletClient, toolServices: ToolServices) {
    try {
        type RedactableValue =
            | string
            | number
            | boolean
            | null
            | undefined
            | Record<string, unknown>
            | RedactableValue[];
        const redactSensitiveInfo = (obj: RedactableValue): RedactableValue => {
            if (typeof obj !== "object" || obj === null) return obj;
            if (Array.isArray(obj)) return obj.map(redactSensitiveInfo);
            return Object.fromEntries(
                Object.entries(obj).map(([key, value]) => {
                    const sensitiveKeys = [
                        "key",
                        "secret",
                        "token",
                        "seed",
                        "private",
                        "password",
                        "address",
                        "mint",
                        "wallet",
                        "hash",
                        "signature",
                    ];
                    if (sensitiveKeys.some((k) => key.toLowerCase().includes(k))) {
                        return [key, "[REDACTED]"];
                    }
                    if (typeof value === "string") {
                        const redactedValue = value
                            .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
                            .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
                            .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
                            .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
                            .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
                            .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
                            .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]");

                        if (redactedValue !== value) {
                            return [key, redactedValue];
                        }

                        const previewLength = 4;
                        if (value.length > 32) {
                            return [key, `${value.slice(0, previewLength)}...${value.slice(-previewLength)}`];
                        }
                    }
                    if (typeof value === "object" && value !== null) {
                        return [key, redactSensitiveInfo(value as Record<string, unknown>)];
                    }
                    return [key, value];
                }),
            );
        };
        console.log(`[TOOL] Starting execution of: ${toolCall.function.name}`);
        const args = JSON.parse(toolCall.function.arguments);
        const redactedArgs = redactSensitiveInfo(args);
        console.log(`[TOOL] Parsed arguments for ${toolCall.function.name}:`, JSON.stringify(redactedArgs));

        let result: ToolMethodResult;
        switch (toolCall.function.name) {
            case "getTokenBalance": {
                const params = {
                    walletAddress: args.walletAddress || walletClient.getAddress(),
                    mintAddress: args.mintAddress,
                } as const;
                const addressPreview = params.walletAddress
                    ? `${params.walletAddress.slice(0, 4)}...${params.walletAddress.slice(-4)}`
                    : "default wallet";
                console.log(`[TOOL] Fetching balance for address: ${addressPreview}`);
                const balance = await toolServices.splToken.execute(
                    "getTokenBalanceByMintAddress",
                    walletClient,
                    params,
                );
                const tokenInfo = await toolServices.splToken.execute("getTokenInfoBySymbol", undefined, {
                    symbol: params.mintAddress,
                });
                result = `Balance: ${balance} ${tokenInfo?.symbol || "tokens"}`;
                break;
            }
            case "getTrendingCoins": {
                console.log("[TOOL] Fetching trending coins from CoinGecko");
                const {
                    trending: { coins: trendingCoins },
                } = await toolServices.coingecko.execute("getTrendingCoins", undefined, {});
                console.log(`[TOOL] Retrieved ${trendingCoins.length} trending coins`);
                const trendingList = trendingCoins
                    .map(
                        (coin: { item: { name: string; symbol: string; price_btc: number } }, index: number) =>
                            `${index + 1}. ${coin.item.name} (${coin.item.symbol.toUpperCase()}) - ${coin.item.price_btc} BTC`,
                    )
                    .join("\n");
                result = `🔥 Trending Coins:\n${trendingList}`;
                break;
            }
            case "swapTokens": {
                const params = {
                    inputMint: args.inputMint,
                    outputMint: args.outputMint,
                    amount: args.amount,
                    slippageBps: args.slippageBps || 100,
                    autoSlippage: true,
                } as const;
                const inputPreview = `${params.inputMint.slice(0, 4)}...${params.inputMint.slice(-4)}`;
                const outputPreview = `${params.outputMint.slice(0, 4)}...${params.outputMint.slice(-4)}`;
                console.log(
                    `[TOOL] Initiating swap. Amount: ${args.amount}, From: ${inputPreview}, To: ${outputPreview}`,
                );
                const quote = await toolServices.jupiter.execute("getQuote", undefined, params);
                const swapResult = await toolServices.jupiter.execute("swapTokens", walletClient, params);
                console.log(`[TOOL] Swap completed. Hash: ${swapResult.hash.slice(0, 8)}...`);
                result = `✅ Swap successful!\nTransaction hash: ${swapResult.hash}`;
                break;
            }
            case "createToken": {
                const params = {
                    name: args.name,
                    symbol: args.symbol,
                    description: args.description,
                    imageUrl: args.imageUrl,
                    amountToBuyInSol: args.amountToBuyInSol,
                    slippage: args.slippage || 1,
                    priorityFee: args.priorityFee || 1,
                } as const;
                const { createdToken, creator, url } = await toolServices.pumpfun.execute(
                    "createAndBuyToken",
                    walletClient,
                    params,
                );
                const mintPreview = createdToken ? `${createdToken.slice(0, 8)}...` : "unknown";
                const creatorPreview = creator ? `${creator.slice(0, 8)}...` : "unknown";
                console.log(
                    `[TOOL] Token created successfully. Name: ${params.name}, Symbol: ${params.symbol}, Mint: ${mintPreview}`,
                );
                result = `🎉 Token created!\nMint Address: ${createdToken}\nCreator: ${creatorPreview}\nView on Pump: ${url}`;
                break;
            }
            default:
                console.error(`[TOOL] Unsupported tool requested: ${toolCall.function.name}`);
                throw new Error(`Unsupported blockchain operation: ${toolCall.function.name}`);
        }

        console.log(`[TOOL] Successfully executed ${toolCall.function.name}`);
        return { content: result };
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        // Redact potential sensitive information from error messages
        const redactedError = errorMessage
            .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
            .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
            .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
            .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
            .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
            .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
            .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]");
        // Log error without potentially sensitive details
        console.error(`[TOOL ERROR] Failed to execute ${toolCall.function.name}`);
        throw new Error(`Failed to execute ${toolCall.function.name}: ${redactedError}`);
    }
}

async function handleMessage(chatId: number, text: string, bot: TelegramBot) {
    try {
        const redactedText = text
            .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
            .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
            .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
            .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
            .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
            .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
            .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]");
        console.log(`[REQUEST] Processing message: ${redactedText}`);

        const walletClient = solana({
            keypair,
            connection,
        });

        const tools = (await getOnChainTools({
            wallet: walletClient,
            plugins: [
                splToken({ network: "mainnet" }),
                coingecko({ apiKey: ENV.COINGECKO_API_KEY }),
                jupiter(),
                pumpfun(),
            ],
        })) as unknown as ToolServices;

        const toolServices: ToolServices = {
            splToken: tools.splToken,
            coingecko: tools.coingecko,
            jupiter: tools.jupiter,
            pumpfun: tools.pumpfun,
        };

        const messages: Message[] = [
            {
                role: "system",
                content: `You are a Solana blockchain assistant with access to these tools:

1. getTokenBalance - Check SPL token balances
   - Use for: "What's my balance?", "Check USDC balance"
   - Required: mintAddress (token's contract address)

2. getTrendingCoins - Get CoinGecko trending data
   - Use for: "What's trending?", "Show popular coins"
   - No parameters needed

3. swapTokens - Execute token swaps via Jupiter
   - Use for: "Swap SOL to USDC", "Trade tokens"
   - Required: inputMint, outputMint, amount
   - Optional: slippageBps (default: 100)

4. createToken - Create tokens via Pump.fun
   - Use for: "Create new token", "Make a token"
   - Required: name, symbol, description, imageUrl, amountToBuyInSol

Always use tools for blockchain operations. Explain what you're doing before and after tool execution. If you encounter errors, provide clear feedback to help users correct their input.`,
            },
            {
                role: "user",
                content: text,
            },
        ];

        console.log("[API] Sending request to OpenRouter");
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ENV.OPENROUTER_API_KEY}`,
                "HTTP-Referer": "https://github.com/goat-sdk/goat",
                "X-Title": "GOAT SDK Solana Example",
            },
            body: JSON.stringify({
                model: "deepseek/deepseek-chat",
                messages,
                tools: TOOLS,
                temperature: 0.7,
                max_tokens: 1024,
                tool_choice: "auto",
                response_format: { type: "text" },
                stream: false,
            }),
        });

        if (!response.ok) {
            throw new Error(`OpenRouter API error: ${response.status}`);
        }

        try {
            const aiResponse = await response.json();
            const redactedResponse = {
                model: aiResponse.model,
                created: aiResponse.created,
                choices: aiResponse.choices?.map(
                    (choice: {
                        index: number;
                        finish_reason: string;
                        message?: {
                            content?: string;
                            tool_calls?: Array<{
                                id: string;
                                type: string;
                                function: {
                                    name: string;
                                    arguments: string;
                                };
                            }>;
                        };
                    }) => ({
                        index: choice.index,
                        finish_reason: choice.finish_reason,
                        has_content: !!choice.message?.content,
                        has_tool_calls: !!choice.message?.tool_calls?.length,
                    }),
                ),
            };
            console.log("[API] Response received:", redactedResponse);

            if (!aiResponse.choices?.[0]?.message) {
                throw new Error("Invalid response format from AI model");
            }

            const assistantMessage = aiResponse.choices[0].message;

            // Handle content first if available
            if (assistantMessage.content) {
                await bot.sendMessage(chatId, assistantMessage.content);
            }

            // Extract tool calls from either format
            const toolCalls =
                assistantMessage.tool_calls ||
                (assistantMessage.function_call
                    ? [
                          {
                              id: "1",
                              type: "function",
                              function: assistantMessage.function_call,
                          },
                      ]
                    : []);

            if (toolCalls.length > 0) {
                try {
                    for (const call of toolCalls) {
                        console.log(`[TOOL] Executing ${call.function.name}`);
                        const toolCall: ToolCall = {
                            id: call.id,
                            type: "function",
                            function: {
                                name: call.function.name,
                                arguments: call.function.arguments,
                            },
                        };

                        try {
                            const result = await executeBlockchainTool(toolCall, walletClient, toolServices);
                            await bot.sendMessage(chatId, result.content);
                        } catch (toolError) {
                            console.error(`[TOOL ERROR] ${call.function.name}:`, toolError);

                            // Get a fallback response from the AI
                            const fallbackMessages = [
                                ...messages,
                                {
                                    role: "assistant",
                                    content: `I encountered an error while trying to ${call.function.name}. Let me explain what happened and suggest alternatives.`,
                                },
                            ];

                            const fallbackResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${ENV.OPENROUTER_API_KEY}`,
                                    "HTTP-Referer": "https://github.com/goat-sdk/goat",
                                    "X-Title": "GOAT SDK Solana Example",
                                },
                                body: JSON.stringify({
                                    model: "deepseek/deepseek-chat",
                                    messages: fallbackMessages,
                                    temperature: 0.7,
                                    max_tokens: 1024,
                                    response_format: { type: "text" },
                                    stream: false,
                                }),
                            });

                            const fallbackAI = await fallbackResponse.json();
                            const fallbackMessage = fallbackAI.choices[0].message.content;
                            await bot.sendMessage(chatId, fallbackMessage);
                        }
                    }
                } catch (error) {
                    const redactedErrorMsg =
                        error instanceof Error
                            ? error.message
                                  .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
                                  .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
                                  .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
                                  .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
                                  .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
                                  .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
                                  .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]")
                            : "Unknown error";
                    console.error("[ERROR] Critical error in tool execution:", redactedErrorMsg);
                    await bot.sendMessage(
                        chatId,
                        "I encountered an unexpected error. Please try again with a simpler request.",
                    );
                }
            } else if (!assistantMessage.content) {
                console.error("[ERROR] No content or tool calls in response");
                await bot.sendMessage(
                    chatId,
                    "I couldn't understand how to process your request. Please try rephrasing it with more specific details about what you'd like to do.",
                );
            }
        } catch (error) {
            const redactedAIError =
                error instanceof Error
                    ? error.message
                          .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
                          .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
                          .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
                          .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
                          .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
                          .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
                          .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]")
                    : "Unknown error";
            console.error("[ERROR] Error processing AI response:", redactedAIError);
            await bot.sendMessage(chatId, "I encountered an error processing your request. Please try again.");
        }
    } catch (error) {
        const redactedError =
            error instanceof Error
                ? error.message
                      .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
                      .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
                      .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
                      .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
                      .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
                      .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
                      .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]")
                : "Unknown error";
        console.error("[ERROR] Error in handleMessage:", redactedError);
        await bot.sendMessage(chatId, "I encountered an error processing your request. Please try again.");
    }
}

async function startBot(): Promise<void> {
    const bot = new TelegramBot(ENV.TELEGRAM_BOT_TOKEN, { polling: true });

    bot.onText(/\/start/, async (msg: TelegramMessage) => {
        const chatId = msg.chat.id;
        await bot.sendMessage(chatId, "Welcome! I'm your Solana & DeFi assistant. How can I help?");
    });

    bot.on("message", async (msg: TelegramMessage) => {
        if (msg.text && !msg.text.startsWith("/start")) {
            try {
                await handleMessage(msg.chat.id, msg.text, bot);
            } catch (error) {
                const redactedError =
                    error instanceof Error
                        ? error.message
                              .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
                              .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
                              .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
                              .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
                              .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
                              .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
                              .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]")
                        : "Unknown error";
                console.error("[ERROR] Message handler error:", redactedError);
                await bot.sendMessage(
                    msg.chat.id,
                    "I encountered an error. Please try again with a different request.",
                );
            }
        }
    });
}

if (require.main === module) {
    startBot().catch((error) => {
        const redactedError =
            error instanceof Error
                ? error.message
                      .replace(/0x[a-fA-F0-9]{40}/g, "[REDACTED_ADDRESS]")
                      .replace(/[1-9A-HJ-NP-Za-km-z]{32,44}/g, "[REDACTED_KEY]")
                      .replace(/[0-9a-fA-F]{64}/g, "[REDACTED_HASH]")
                      .replace(/[A-Za-z0-9+/=]{40,}/g, "[REDACTED]")
                      .replace(/[A-Za-z0-9_-]{20,}/g, "[REDACTED_API_KEY]")
                      .replace(/pk_[A-Za-z0-9]{20,}/g, "[REDACTED_PUBLIC_KEY]")
                      .replace(/sk_[A-Za-z0-9]{20,}/g, "[REDACTED_SECRET_KEY]")
                : "Unknown error";
        console.error("[ERROR] Critical bot error:", redactedError);
        process.exit(1);
    });
}
