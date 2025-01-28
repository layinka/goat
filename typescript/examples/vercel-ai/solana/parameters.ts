import { z } from "zod";

export const GetTokenBalanceByMintAddressParameters = z.object({
    walletAddress: z.string().describe("The address to get the balance of"),
    mintAddress: z.string().describe("The mint address of the token to get the balance of"),
});

export const GetTokenInfoBySymbolParameters = z.object({
    symbol: z.string().describe("The symbol of the token to get info for"),
});

export const GetQuoteParameters = z.object({
    inputMint: z.string().describe("The token address of the token to swap from"),
    outputMint: z.string().describe("The token address of the token to swap to"),
    amount: z.number().describe("The amount of tokens to swap in the tokens base unit"),
    slippageBps: z.number().optional().describe("The slippage in bps"),
    autoSlippage: z.boolean().optional().describe("Whether to use auto slippage"),
});

export const CreateAndBuyTokenParameters = z.object({
    name: z.string().describe("The name of the token"),
    symbol: z.string().describe("The symbol of the token"),
    description: z.string().describe("The description of the token"),
    amountToBuyInSol: z.number().default(0).describe("The amount of tokens to buy in lamports"),
    slippage: z.number().default(5).describe("The slippage of the transaction"),
    priorityFee: z.number().default(0.0005).describe("The priority fee of the transaction"),
    imageUrl: z.string().describe("URL of the image file of the token"),
});

export const NoParams = z.object({});
