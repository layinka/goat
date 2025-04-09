import { type Chain, PluginBase } from "@goat-sdk/core";
import { EVMWalletClient } from "@goat-sdk/wallet-evm";
import { base, celo, celoAlfajores, hardhat, optimism, sonic, sonicTestnet } from "viem/chains";
import { CompoundV2Service } from "./compound-v2.service";

const supportedChains = [base, optimism, sonic, sonicTestnet, celo, celoAlfajores, hardhat];
export class CompoundV2Plugin extends PluginBase<EVMWalletClient> {
    constructor() {
        super("compound-v2", [new CompoundV2Service()]);
    }

    supportsChain(chain: Chain): boolean {
        return chain.type === "evm" && supportedChains.some((ss) => ss.id === chain.id);
    }
}

export function compoundv2() {
    return new CompoundV2Plugin();
}
