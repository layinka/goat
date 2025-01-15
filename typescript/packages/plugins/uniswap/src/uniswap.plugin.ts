import { type Chain, PluginBase } from "@goat-sdk/core";
import { arbitrum, avalanche, base, celo, mainnet, optimism, polygon, zora } from "viem/chains";
import { UniswapService } from "./uniswap.service";
import type { UniswapCtorParams } from "./types/UniswapCtorParams";

const SUPPORTED_CHAINS = [mainnet, polygon, avalanche, base, optimism, zora, arbitrum, celo];

export class UniswapPlugin extends PluginBase {
    private readonly service: UniswapService;

    constructor(params: UniswapCtorParams) {
        const tools = [
            "checkApproval",
            "getQuote",
            "getSwapTransaction",
            "checkLiquidityApproval",
            "createPoolAndPosition",
            "increaseLP",
            "decreaseLP",
            "claimFees",
            "migrateLP",
            "getRouterAddress",
            "getSwappableTokens",
        ];
        super("uniswap", tools);
        this.service = new UniswapService(params);
    }

    supportsChain = (chain: Chain) => chain.type === "evm" && SUPPORTED_CHAINS.some((c) => c.id === chain.id);

    // Expose service methods through proper method declarations
    checkApproval(params: Parameters<UniswapService["checkApproval"]>[0]) {
        return this.service.checkApproval(params);
    }

    getQuote(params: Parameters<UniswapService["getQuote"]>[0]) {
        return this.service.getQuote(params);
    }

    getSwapTransaction(params: Parameters<UniswapService["getSwapTransaction"]>[0]) {
        return this.service.getSwapTransaction(params);
    }

    checkLiquidityApproval(params: Parameters<UniswapService["checkLiquidityApproval"]>[0]) {
        return this.service.checkLiquidityApproval(params);
    }

    createPoolAndPosition(params: Parameters<UniswapService["createPoolAndPosition"]>[0]) {
        return this.service.createPoolAndPosition(params);
    }

    increaseLP(params: Parameters<UniswapService["increaseLP"]>[0]) {
        return this.service.increaseLP(params);
    }

    decreaseLP(params: Parameters<UniswapService["decreaseLP"]>[0]) {
        return this.service.decreaseLP(params);
    }

    claimFees(params: Parameters<UniswapService["claimFees"]>[0]) {
        return this.service.claimFees(params);
    }

    migrateLP(params: Parameters<UniswapService["migrateLP"]>[0]) {
        return this.service.migrateLP(params);
    }

    getRouterAddress(params: Parameters<UniswapService["getRouterAddress"]>[0]) {
        return this.service.getRouterAddress(params);
    }

    getSwappableTokens(params: Parameters<UniswapService["getSwappableTokens"]>[0]) {
        return this.service.getSwappableTokens(params);
    }
}

export const uniswap = (params: UniswapCtorParams) => new UniswapPlugin(params);
