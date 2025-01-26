import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { sendSOL, solana } from "@goat-sdk/wallet-solana";

import { Connection, Keypair } from "@solana/web3.js";

import { sns } from "@goat-sdk/plugin-sns";
import base58 from "bs58";

require("dotenv").config();

// TODO(alfonso-paella) Should we document the RPC provider requirements?
// Are there specific endpoints that work better with SNS?
const connection = new Connection(process.env.RPC_PROVIDER_URL as string);
const keypair = Keypair.fromSecretKey(base58.decode(process.env.WALLET_PRIVATE_KEY as string));

(async () => {
    // TODO(alfonso-paella) Should we document the SNS plugin capabilities?
    // What domain types are supported? Are there any limitations?
    const tools = await getOnChainTools({
        wallet: solana({
            keypair,
            connection,
        }),
        plugins: [
            sendSOL(), // Enable SOL transfers
            sns(),     // Enable SNS domain resolution
        ],
    });

    // TODO(alfonso-paella) Should we document the maxSteps parameter?
    // What's the recommended value for SNS operations?
    const result = await generateText({
        model: openai("gpt-4o-mini"),
        tools: tools,
        maxSteps: 5, // Maximum number of tool invocations per request
        prompt: "Send 0.005 SOL to investigations.sol",
    });

    console.log(result.text);
})();
