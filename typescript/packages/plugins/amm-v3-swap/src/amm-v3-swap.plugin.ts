import { type Chain, PluginBase } from "@goat-sdk/core";
import { base, celo, celoAlfajores, hardhat, optimism, sonic, sonicTestnet } from "viem/chains";
import { AmmV3SwapService } from "./amm-v3-swap.service";

const supportedChains = [base, optimism, sonic, sonicTestnet, celo, celoAlfajores, hardhat];

export class AmmV3SwapPlugin extends PluginBase<EVMWalletClient> {
    constructor() {
        super("amm-v3-swap", [new AmmV3SwapService()]);
    }

    supportsChain(chain: Chain): boolean {
        return chain.type === "evm" && supportedChains.some((ss) => ss.id === chain.id);
    }
}

export function ammv3swap() {
    return new AmmV3SwapPlugin();
}
