import { type Chain, PluginBase } from "@goat-sdk/core";
import { FutarchyService } from "./futarchy.service";

export class FutarchyPlugin extends PluginBase {
    constructor() {
        super("futarchy", [new FutarchyService()]);
    }

    supportsChain = (chain: Chain) => chain.type === "solana";
}

export const futarchy = () => new FutarchyPlugin();
