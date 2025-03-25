import { runEvals } from "@goat-sdk/core";
import { viem } from "@goat-sdk/wallet-viem";
import { ChatOpenAI } from "@langchain/openai";
import { createWalletClient } from "viem";
import { http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";
import { uniswap } from "./src";
import { ALL_TOOLS_DATASET } from "./src/eval";

require("dotenv").config();

// Set up LLM
const llm = new ChatOpenAI({
    modelName: "gpt-4o-mini",
    temperature: 0.3,
});

// Create wallet client
const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);
const walletClient = createWalletClient({
    account,
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: mainnet,
});

async function runTest() {
    try {
        const result = await runEvals(
            ALL_TOOLS_DATASET,
            {
                wallet: viem(walletClient),
                plugins: [uniswap()],
                llm,
            },
            "Uniswap Plugin Evaluation Tests",
        );

        console.log("\nEvaluation Summary:");
        console.log(`Success: ${result.success}`);
        console.log(`Total: ${result.results.length}`);
        console.log(`Passed: ${result.results.filter((r) => r.passed).length}`);
        console.log(`Failed: ${result.results.filter((r) => !r.passed).length}`);
    } catch (error) {
        console.error("Error running evaluations:", error);
    }
}

runTest();
