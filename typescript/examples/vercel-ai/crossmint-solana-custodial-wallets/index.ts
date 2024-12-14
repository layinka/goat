import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { crossmint } from "@goat-sdk/crossmint";
import { Connection } from "@solana/web3.js";
import { sendSOL } from "@goat-sdk/core";


require("dotenv").config();

const apiKey = process.env.CROSSMINT_STAGING_API_KEY;
const email = process.env.EMAIL;

if (!apiKey || !email) {
    throw new Error("Missing environment variables");
}

const { custodial, mint } = crossmint(apiKey);

(async () => {
    const tools = await getOnChainTools({
        wallet: await custodial({
            chain: "solana",
            email: email,
            connection: new Connection("https://api.devnet.solana.com", "confirmed"),
        }),
        plugins: [mint()],
    });

    const result = await generateText({
        model: openai("gpt-4o-mini"),
        tools: tools,
        maxSteps: 5,
        prompt: "Mint 1 NFT to recipient joyce@katsulabs.xyz. The NFT's collection id is 9c4c893b-dc93-4858-b0d0-5c90694dff4e and the metadata are 'Test', description 'A gift', and image 'https://crossmint.myfilebase.com/ipfs/QmRyCRzV7yWoQmAQVbwXLtJtuBhWCZZ8MQqj8pRJJJmhTr?tr=w-2048'",
    });

    console.log(result.text);
})();