import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

import { getOnChainTools } from "@goat-sdk/adapter-vercel-ai";
import { BitcoinKeyPairWalletClient } from "@goat-sdk/wallet-bitcoin";
import { sendBitcoin } from "@goat-sdk/wallet-bitcoin";

import * as bitcoin from "bitcoinjs-lib";
import { ECPairFactory } from "ecpair";
import * as ecc from "tiny-secp256k1";

require("dotenv").config();

const ECPair = ECPairFactory(ecc);

// Initialize Bitcoin wallet with testnet configuration
const privateKeyHex = process.env.BITCOIN_TESTNET_PRIVATE_KEY as string;
if (!privateKeyHex) {
    throw new Error("BITCOIN_TESTNET_PRIVATE_KEY environment variable is required");
}

const keyPair = ECPair.fromPrivateKey(Buffer.from(privateKeyHex, "hex"), { 
    network: bitcoin.networks.testnet,
});

const bitcoinWallet = new BitcoinKeyPairWalletClient(keyPair, bitcoin.networks.testnet);

(async () => {
    const tools = await getOnChainTools({
        wallet: bitcoinWallet,
        plugins: [sendBitcoin()],
    });

    const result = await generateText({
        model: openai("gpt-4o-mini"),
        tools: tools,
        maxSteps: 5,
        prompt: "Get my Bitcoin wallet address and check its balance",
    });

    console.log(result.text);
})().catch(console.error);
