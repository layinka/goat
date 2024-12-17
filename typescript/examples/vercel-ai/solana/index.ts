import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { solana } from "@goat-sdk/wallet-solana";

import { sendSOL } from "@goat-sdk/core";
import { Connection, Keypair } from "@solana/web3.js";

import { jupiter } from "@goat-sdk/plugin-jupiter";
import { splToken } from "@goat-sdk/plugin-spl-token";
import { coingecko } from "@goat-sdk/plugin-coingecko";
import base58 from "bs58";

require("dotenv").config();

const connection = new Connection(process.env.SOLANA_RPC_URL as string);
const keypair = Keypair.fromSecretKey(base58.decode(process.env.SOLANA_PRIVATE_KEY as string));

(async () => {
    try {
        console.log("Starting script...");
        const tools = await getOnChainTools({
            wallet: solana({
                keypair,
                connection,
            }),
            plugins: [sendSOL(), jupiter({ connection }), splToken({ connection, network: "mainnet" })],
        });
        console.log("Tools initialized successfully");

        console.log("Generating text with prompt...");
        const result = await generateText({
            model: openai("gpt-4o-mini"),
            tools: tools,
            maxSteps: 5,
            prompt: "swap 0.01 SOL for GOAT with 3% slippage",
        });

        console.log("Result:", result.text);
    } catch (error) {
        console.error("=== Error Details ===");
        if (error instanceof Error) {
            console.error("Error type:", error.constructor.name);
            console.error("Error message:", error.message);
            if ('getLogs' in error) {
                const logs = await (error as any).getLogs();
                console.error("Transaction logs:", logs);
            }
        }
        console.error("Full error object:", JSON.stringify(error, null, 2));
        process.exit(1);
    }
})();
