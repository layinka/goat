import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";

enum ProtocolType {
    V2 = "V2",
    V3 = "V3",
    V4 = "V4",
    UNISWAPX = "UNISWAPX",
    UNISWAPX_V2 = "UNISWAPX_V2",
    UNISWAPX_V3 = "UNISWAPX_V3",
    PRIORITY = "PRIORITY",
}

enum SwapType {
    EXACT_IN = "EXACT_IN",
    EXACT_OUT = "EXACT_OUT",
}

enum Protocol {
    V2 = "V2",
    V3 = "V3",
    V4 = "V4",
    UNISWAPX = "UNISWAPX",
    UNISWAPX_V2 = "UNISWAPX_V2",
    UNISWAPX_V3 = "UNISWAPX_V3",
    PRIORITY = "PRIORITY",
}

enum Routing {
    CLASSIC = "CLASSIC",
}

export const QuoteSchema = z.object({
    chainId: z.number(),
    swapper: z.string(),
    input: z.any(),
    output: z.any(),
    slippage: z.any(),
    tradeType: z.nativeEnum(SwapType),
    route: z.any(),
    gasFee: z.string(),
    gasFeeUSD: z.string(),
    gasFeeQuote: z.string(),
    gasUseEstimate: z.string(),
    routeString: z.string(),
    blockNumber: z.string(),
    quoteId: z.string(),
    gasPrice: z.string(),
    maxFeePerGas: z.string(),
    maxPriorityFeePerGas: z.string(),
    txFailureReasons: z.array(z.string()),
    priceImpact: z.number(),
});

export const PermitDataSchema = z.object({
    domain: z.string(),
    types: z.record(z.string(), z.any()),
    primaryType: z.string(),
    message: z.record(z.string(), z.any()),
});

export const QuoteResponseSchema = z.object({
    routing: z.nativeEnum(Routing),
    permitData: PermitDataSchema.optional(),
    quote: QuoteSchema,
});

export const TransactionSchema = z.object({
    from: z.string(),
    to: z.string(),
    amount: z.string(),
    token: z.string(),
});

export const SwapResponseSchema = z.object({
    transaction: TransactionSchema,
    gasFee: z.string(),
});

export const TxHashSchema = z.string();

export class CheckApprovalBodySchema extends createToolParameters(
    z.object({
        token: z.string(),
        amount: z.string(),
        walletAddress: z.string(),
    }),
) {}

export class GetQuoteBodySchema extends createToolParameters(
    z.object({
        tokenIn: z.string(),
        tokenOut: z.string(),
        tokenInChainId: z.number(),
        tokenOutChainId: z.number(),
        amount: z.string(),
        swapper: z.string(),
        type: z.nativeEnum(SwapType),
        protocols: z.array(z.nativeEnum(Protocol)),
    }),
) {}

export class GetSwapBodySchema extends createToolParameters(
    z.object({
        quote: QuoteResponseSchema,
        permitData: z.any().optional(),
        signature: z.string().optional(),
        simulateTransaction: z.boolean().optional(),
    }),
) {}

export const PositionSchema = z.object({
    token0: z.string(),
    token1: z.string(),
    fee: z.number(),
    tickLower: z.number(),
    tickUpper: z.number(),
});

export const BatchPermitDataSchema = z.object({
    domain: z.string(),
    types: z.record(z.string(), z.any()),
    primaryType: z.string(),
    message: z.record(z.string(), z.any()),
});

export class CheckLiquidityApprovalSchema extends createToolParameters(
    z.object({
        protocol: z.nativeEnum(ProtocolType),
        token0: z.string(),
        token1: z.string(),
        positionToken: z.string(),
        chainId: z.number(),
        walletAddress: z.string(),
        amount0: z.string(),
        amount1: z.string(),
        positionAmount: z.string(),
        simulateTransaction: z.boolean().optional(),
    }),
) {}

export class CreatePoolAndPositionSchema extends createToolParameters(
    z.object({
        protocol: z.nativeEnum(ProtocolType),
        position: PositionSchema,
        walletAddress: z.string(),
        chainId: z.number(),
        initialPrice: z.string(),
        poolLiquidity: z.string(),
        currentTick: z.number(),
        sqrtRatioX96: z.string(),
        amount0: z.string(),
        amount1: z.string(),
        slippageTolerance: z.number(),
        deadline: z.number(),
        signature: z.string().optional(),
        batchPermitData: BatchPermitDataSchema.optional(),
        simulateTransaction: z.boolean().optional(),
    }),
) {}

export class IncreaseLPSchema extends createToolParameters(
    z.object({
        protocol: z.nativeEnum(ProtocolType),
        tokenId: z.number(),
        position: PositionSchema,
        poolLiquidity: z.string(),
        currentTick: z.number(),
        sqrtRatioX96: z.string(),
        walletAddress: z.string(),
        chainId: z.number(),
        amount0: z.string(),
        amount1: z.string(),
        slippageTolerance: z.number(),
        deadline: z.number(),
        signature: z.string().optional(),
        batchPermitData: BatchPermitDataSchema.optional(),
        simulateTransaction: z.boolean().optional(),
    }),
) {}

export class DecreaseLPSchema extends createToolParameters(
    z.object({
        protocol: z.nativeEnum(ProtocolType),
        tokenId: z.number(),
        position: PositionSchema,
        walletAddress: z.string(),
        chainId: z.number(),
        liquidityPercentageToDecrease: z.number(),
        liquidity0: z.string(),
        liquidity1: z.string(),
        slippageTolerance: z.number(),
        poolLiquidity: z.string(),
        currentTick: z.number(),
        sqrtRatioX96: z.string(),
        positionLiquidity: z.string(),
        expectedTokenOwed0RawAmount: z.string(),
        expectedTokenOwed1RawAmount: z.string(),
        collectAsWETH: z.boolean(),
        deadline: z.number(),
        simulateTransaction: z.boolean().optional(),
    }),
) {}

export class ClaimFeesSchema extends createToolParameters(
    z.object({
        protocol: z.nativeEnum(ProtocolType),
        tokenId: z.number(),
        position: PositionSchema,
        walletAddress: z.string(),
        chainId: z.number(),
        expectedTokenOwed0RawAmount: z.string(),
        expectedTokenOwed1RawAmount: z.string(),
        collectAsWETH: z.boolean(),
        simulateTransaction: z.boolean().optional(),
    }),
) {}

export class MigrateLPSchema extends createToolParameters(
    z.object({
        tokenId: z.number(),
        walletAddress: z.string(),
        chainId: z.number(),
        inputProtocol: z.nativeEnum(ProtocolType),
        inputPosition: PositionSchema,
        inputPoolLiquidity: z.string(),
        inputCurrentTick: z.number(),
        inputSqrtRatioX96: z.string(),
        inputPositionLiquidity: z.string(),
        signature: z.string().optional(),
        amount0: z.string(),
        amount1: z.string(),
        outputProtocol: z.nativeEnum(ProtocolType),
        outputPosition: PositionSchema,
        initialPrice: z.string().optional(),
        outputPoolLiquidity: z.string().optional(),
        outputCurrentTick: z.number().optional(),
        outputSqrtRatioX96: z.string().optional(),
        expectedTokenOwed0RawAmount: z.string(),
        expectedTokenOwed1RawAmount: z.string(),
        slippageTolerance: z.number(),
        deadline: z.number(),
        signatureDeadline: z.number(),
        simulateTransaction: z.boolean().optional(),
    }),
) {}

export class GetRouterAddressSchema extends createToolParameters(
    z.object({
        chainId: z.number(),
    }),
) {}

export class GetSwappableTokensSchema extends createToolParameters(
    z.object({
        chainId: z.number(),
    }),
) {}
