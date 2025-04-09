import { type Chain, PluginBase } from "@goat-sdk/core";
import { base, celo, celoAlfajores, hardhat, optimism, sonic, sonicTestnet } from "viem/chains";
import { DefiLlamaService } from "./defillama.service";

const supportedChains = [base, optimism, sonic, sonicTestnet, celo, celoAlfajores, hardhat];

export class DefiLlamaPlugin extends PluginBase {
    constructor() {
        super("defillama", [new DefiLlamaService()]);
    }

    supportsChain(chain: Chain): boolean {
        return chain.type === "evm" && supportedChains.some((ss) => ss.id === chain.id);
    }
    // supportsChain = () => true;
}

export function defillama() {
    return new DefiLlamaPlugin();
}
