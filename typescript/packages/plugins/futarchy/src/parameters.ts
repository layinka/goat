import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";

export class InitializeDaoParameters extends createToolParameters(
    z.object({
        tokenMint: z.string().describe("The token mint address"),
        tokenPriceUiAmount: z.number().describe("The token price in UI amount"),
        minBaseFutarchicLiquidity: z.number().describe("Minimum base token liquidity"),
        minQuoteFutarchicLiquidity: z.number().describe("Minimum quote token liquidity")
    })
) {}

export class InitializeProposalParameters extends createToolParameters(
    z.object({
        dao: z.string().describe("The DAO address"),
        descriptionUrl: z.string().describe("URL describing the proposal"),
        instruction: z.any().describe("The instruction to execute if passed"),
        baseTokensToLP: z.string().describe("Amount of base tokens to provide as liquidity"),
        quoteTokensToLP: z.string().describe("Amount of quote tokens to provide as liquidity")
    })
) {}

export class SwapParameters extends createToolParameters(
    z.object({
        ammAddress: z.string().describe("The AMM pool address"),
        inputAmount: z.string().describe("Amount of input tokens to swap"),
        minimumOutputAmount: z.string().describe("Minimum amount of output tokens to receive"),
        inputIsA: z.boolean().describe("Whether input token is token A (true) or token B (false)")
    })
) {}

export class AddLiquidityParameters extends createToolParameters(
    z.object({
        ammAddress: z.string().describe("The AMM pool address"),
        maxTokenAAmount: z.string().describe("Maximum amount of token A to add"),
        maxTokenBAmount: z.string().describe("Maximum amount of token B to add"),
        minLpTokenAmount: z.string().describe("Minimum amount of LP tokens to receive")
    })
) {}

export class RemoveLiquidityParameters extends createToolParameters(
    z.object({
        ammAddress: z.string().describe("The AMM pool address"),
        lpTokenAmount: z.string().describe("Amount of LP tokens to burn"),
        minTokenAAmount: z.string().describe("Minimum amount of token A to receive"),
        minTokenBAmount: z.string().describe("Minimum amount of token B to receive")
    })
) {}

export class SplitTokenParameters extends createToolParameters(
    z.object({
        vaultAddress: z.string().describe("The conditional vault address"),
        amount: z.string().describe("Amount of tokens to split"),
        condition: z.string().describe("The condition under which tokens can be redeemed")
    })
) {}

export class MergeTokenParameters extends createToolParameters(
    z.object({
        vaultAddress: z.string().describe("The conditional vault address"),
        amount: z.string().describe("Amount of conditional tokens to merge"),
        condition: z.string().describe("The condition under which tokens were split")
    })
) {}
