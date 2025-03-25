import { runEvals } from "@goat-sdk/core";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { http } from "viem";
import { mainnet } from "viem/chains";
import { ChatOpenAI } from "@langchain/openai";
import { viem } from "@goat-sdk/wallet-viem";
import { erc20, USDC } from "@goat-sdk/plugin-erc20";

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

// Dataset for testing ERC20 token information
const ERC20_INFO_DATASET = [
  {
    inputs: {
      query: "What is the symbol for USDC?",
    },
    referenceOutputs: {
      tool: "erc20_token_information",
      response: '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
    },
  },
  {
    inputs: {
      query: "Tell me about the USDC token contract",
    },
    referenceOutputs: {
      tool: "erc20_token_information",
      response: '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
    },
  },
];

async function runExample() {
  try {
    const result = await runEvals(
      ERC20_INFO_DATASET,
      {
        wallet: viem(walletClient),
        plugins: [erc20({ tokens: [USDC] })],
        llm,
      },
      "ERC20 Token Information Tests"
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

runExample();
