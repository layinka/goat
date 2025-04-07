import { PluginBase } from "@goat-sdk/core";
import { AmmV3SwapService } from "./amm-v3-swap.service";

export class AmmV3SwapPlugin extends PluginBase {
    constructor() {
        super("amm-v3-swap", [new AmmV3SwapService()]);
    }

    supportsChain = () => true;
}

export function ammv3swap() {
    return new AmmV3SwapPlugin();
}
