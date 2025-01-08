import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";

export class GetPairsByChainAndPairParameters extends createToolParameters(
    z.object({
        chainId: z.string().describe("The blockchain network identifier (e.g., 'ethereum', 'bsc', 'polygon')"),
        pairId: z.string().describe("The DEX pair contract address to fetch information for"),
    }),
) {}

export class SearchPairsParameters extends createToolParameters(
    z.object({
        query: z.string().describe("Search query to find pairs by token name, symbol, or address"),
    }),
) {}

export class GetTokenPairsParameters extends createToolParameters(
    z.object({
        tokenAddresses: z
            .array(z.string())
            .nonempty()
            .max(30)
            .describe("List of token addresses to fetch pairs for (up to 30 addresses, comma-separated)"),
    }),
) {}

// Response types for TypeScript type safety
export interface TokenInfo {
    address: string;
    name: string;
    symbol: string;
}

export interface PairInfo {
    chainId: string;
    dexId: string;
    url: string;
    pairAddress: string;
    baseToken: TokenInfo;
    quoteToken: TokenInfo;
    priceNative: string;
    priceUsd: string;
    liquidity: {
        usd: number;
        base: number;
        quote: number;
    };
    fdv: number;
    marketCap: number;
    pairCreatedAt: number;
}

export interface DexscreenerResponse {
    schemaVersion: string;
    pairs: PairInfo[];
}
