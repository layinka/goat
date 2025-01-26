import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { http } from "viem";
import { createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet } from "viem/chains";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";

import { opensea } from "@goat-sdk/plugin-opensea";
import { viem } from "@goat-sdk/wallet-viem";

require("dotenv").config();

const account = privateKeyToAccount(process.env.WALLET_PRIVATE_KEY as `0x${string}`);

const walletClient = createWalletClient({
    account: account,
    transport: http(process.env.RPC_PROVIDER_URL),
    chain: mainnet,
});

(async () => {
    const tools = await getOnChainTools({
        wallet: viem(walletClient),
        // TODO(alfonso-paella) Should we document the opensea plugin capabilities?
        // What are the available API endpoints and rate limits?
        plugins: [opensea(process.env.OPENSEA_API_KEY as string)],
    });

    const result = await generateText({
        model: openai("gpt-4o-mini"),
        tools: tools,
        // TODO(alfonso-paella) Should we document the maxSteps parameter?
        // What's the recommended value for different OpenSea operations?
        maxSteps: 5,
        // TODO(alfonso-paella) Should we provide more example prompts?
        // What other collection statistics and sales info can be queried?
        prompt: "Get me NFT collection statistics of Nouns and information of recent sales",
    });

    console.log(result.text);
})();
