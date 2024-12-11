import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { sendETH } from "@goat-sdk/core";
import { crossmint } from "@goat-sdk/crossmint";

require("dotenv").config();

const apiKey = process.env.CROSSMINT_STAGING_API_KEY;
const walletSignerSecretKey = process.env.SIGNER_WALLET_SECRET_KEY;
const alchemyApiKey = process.env.ALCHEMY_API_KEY_BASE_SEPOLIA;
const smartWalletAddress = process.env.SMART_WALLET_ADDRESS;

if (!apiKey || !walletSignerSecretKey || !alchemyApiKey || !smartWalletAddress) {
    throw new Error("Missing environment variables");
}

const { smartwallet, faucet, balance } = crossmint(apiKey);

(async () => {
    const tools = await getOnChainTools({
        wallet: await smartwallet({
            address: smartWalletAddress,
            signer: {
                secretKey: walletSignerSecretKey as `0x${string}`,
            },
            chain: "base-sepolia",
            provider: alchemyApiKey,
        }),
        plugins: [sendETH(), balance(), faucet()],
    });

    const result1 = await generateText({
        model: openai("gpt-4o-mini"),
        tools: tools,
        maxSteps: 5,
        prompt: "Fund my wallet with 5 USDC",
    });

    console.log(result1.text);

    const result2 = await generateText({
        model: openai("gpt-4o-mini"),
        tools: tools,
        maxSteps: 5,
        prompt: "Fetch my USDC balance on base-sepolia",
    });

    console.log(result2.text);
})();
