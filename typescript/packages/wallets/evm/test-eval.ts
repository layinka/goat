import { runEvals } from "@goat-sdk/core/src/evals/utils/runEvals";
import { ChatOpenAI } from "@langchain/openai";
import { evm } from "./src";
import { ALL_TOOLS_DATASET } from "./src/eval";

require("dotenv").config();

// Set up LLM
const llm = new ChatOpenAI({
    modelName: "gpt-4o-mini",
    temperature: 0.3,
});

// Create wallet client
const wallet = evm({
    privateKey: process.env.WALLET_PRIVATE_KEY as string,
    rpcUrl: process.env.RPC_PROVIDER_URL as string,
});

async function runTest() {
    try {
        const result = await runEvals(
            ALL_TOOLS_DATASET,
            {
                wallet,
                plugins: [],
                llm,
            },
            "EVM Wallet Evaluation Tests",
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
