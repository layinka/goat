import { Tool } from "@goat-sdk/core";
import type { EVMTransaction } from "../../../wallets/evm/src/types/EVMTransaction";
import {
    CheckApprovalBodySchema,
    GetQuoteBodySchema,
    GetSwapBodySchema,
    CheckLiquidityApprovalSchema,
    CreatePoolAndPositionSchema,
    IncreaseLPSchema,
    DecreaseLPSchema,
    ClaimFeesSchema,
    MigrateLPSchema,
    GetRouterAddressSchema,
    GetSwappableTokensSchema,
} from "./parameters";
import type { UniswapCtorParams } from "./types/UniswapCtorParams";
import type { UniswapApprovalResponse, UniswapTransactionResponse, UniswapLiquidityResponse } from "./types/transactions";

export class UniswapService {
    constructor(private readonly params: UniswapCtorParams) {}

    @Tool({
        description:
            "Check if the wallet has enough approval for a token and return the transaction to approve the token. The approval must takes place before the swap transaction.",
    })
    async checkApproval(parameters: CheckApprovalBodySchema): Promise<UniswapApprovalResponse> {
        const url = new URL(`${this.params.baseUrl}/check_approval`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch approval: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        if (result.transaction) {
            const transaction: EVMTransaction = {
                to: result.transaction.to,
                data: result.transaction.data,
                value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
            };
            return {
                needsApproval: result.needsApproval,
                transaction,
                simulationResults: result.simulationResults,
            };
        }
        
        return { needsApproval: false };
    }

    @Tool({
        description:
            "Get the quote for a swap. If permitData is returned, it needs to be signed using the signedTypedData tool.",
    })
    async getQuote(parameters: GetQuoteBodySchema) {
        const url = new URL(`${this.params.baseUrl}/quote`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch quote: ${response.statusText}`);
        }

        return await response.json();
    }

    @Tool({
        description:
            "Get the swap transaction for a swap. If permitData was returned from the get_quote tool, it needs to be signed using the signedTypedData tool before calling this function.",
    })
    async getSwapTransaction(parameters: GetSwapBodySchema): Promise<UniswapTransactionResponse> {
        const url = new URL(`${this.params.baseUrl}/swap`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch swap: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        const transaction: EVMTransaction = {
            to: result.transaction.to,
            data: result.transaction.data,
            value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
        };
        
        return {
            transaction,
            gasFee: result.gasFee,
            simulationResults: parameters.simulateTransaction ? {
                gasUsed: result.simulationResults?.gasUsed,
                gasPrice: result.simulationResults?.gasPrice,
                totalCost: result.simulationResults?.totalCost,
            } : undefined,
        };
    }

    @Tool({
        description:
            "Check if tokens and permits need to be approved to add liquidity. Returns and optionally sends the transaction if approval is needed.",
    })
    async checkLiquidityApproval(parameters: CheckLiquidityApprovalSchema): Promise<UniswapApprovalResponse> {
        const url = new URL(`${this.params.baseUrl}/lp/approve`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to check liquidity approval: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        if (result.transaction) {
            const transaction: EVMTransaction = {
                to: result.transaction.to,
                data: result.transaction.data,
                value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
            };
            return {
                needsApproval: result.needsApproval,
                transaction,
                simulationResults: parameters.simulateTransaction ? {
                    gasUsed: result.simulationResults?.gasUsed,
                    gasPrice: result.simulationResults?.gasPrice,
                    totalCost: result.simulationResults?.totalCost,
                } : undefined,
            };
        }
        
        return { needsApproval: false };
    }

    @Tool({
        description:
            "Create a new pool and liquidity position. Returns the transaction to create the pool (if needed) and position.",
    })
    async createPoolAndPosition(parameters: CreatePoolAndPositionSchema): Promise<UniswapLiquidityResponse> {
        const url = new URL(`${this.params.baseUrl}/lp/create`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to create pool and position: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        const transaction: EVMTransaction = {
            to: result.transaction.to,
            data: result.transaction.data,
            value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
        };
        
        return {
            transaction,
            gasFee: result.gasFee,
            positionId: result.positionId,
            simulationResults: parameters.simulateTransaction ? {
                gasUsed: result.simulationResults?.gasUsed,
                gasPrice: result.simulationResults?.gasPrice,
                totalCost: result.simulationResults?.totalCost,
            } : undefined,
        };
    }

    @Tool({
        description:
            "Increase liquidity in an existing position. Returns the transaction to increase the position.",
    })
    async increaseLP(parameters: IncreaseLPSchema): Promise<UniswapLiquidityResponse> {
        const url = new URL(`${this.params.baseUrl}/lp/increase`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to increase LP: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        const transaction: EVMTransaction = {
            to: result.transaction.to,
            data: result.transaction.data,
            value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
        };
        
        return {
            transaction,
            gasFee: result.gasFee,
            positionId: result.positionId,
            simulationResults: parameters.simulateTransaction ? {
                gasUsed: result.simulationResults?.gasUsed,
                gasPrice: result.simulationResults?.gasPrice,
                totalCost: result.simulationResults?.totalCost,
            } : undefined,
        };
    }

    @Tool({
        description:
            "Decrease liquidity in an existing position. Returns the transaction to decrease the position.",
    })
    async decreaseLP(parameters: DecreaseLPSchema): Promise<UniswapLiquidityResponse> {
        const url = new URL(`${this.params.baseUrl}/lp/decrease`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to decrease LP: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        const transaction: EVMTransaction = {
            to: result.transaction.to,
            data: result.transaction.data,
            value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
        };
        
        return {
            transaction,
            gasFee: result.gasFee,
            positionId: result.positionId,
            simulationResults: parameters.simulateTransaction ? {
                gasUsed: result.simulationResults?.gasUsed,
                gasPrice: result.simulationResults?.gasPrice,
                totalCost: result.simulationResults?.totalCost,
            } : undefined,
        };
    }

    @Tool({
        description: "Claim fees from a liquidity position. Returns the transaction to claim the fees.",
    })
    async claimFees(parameters: ClaimFeesSchema): Promise<UniswapTransactionResponse> {
        const url = new URL(`${this.params.baseUrl}/lp/claim`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to claim fees: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        const transaction: EVMTransaction = {
            to: result.transaction.to,
            data: result.transaction.data,
            value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
        };
        
        return {
            transaction,
            gasFee: result.gasFee,
            simulationResults: parameters.simulateTransaction ? {
                gasUsed: result.simulationResults?.gasUsed,
                gasPrice: result.simulationResults?.gasPrice,
                totalCost: result.simulationResults?.totalCost,
            } : undefined,
        };
    }

    @Tool({
        description:
            "Migrate a liquidity position from one protocol version to another. Returns the transaction to migrate the position.",
    })
    async migrateLP(parameters: MigrateLPSchema): Promise<UniswapLiquidityResponse> {
        const url = new URL(`${this.params.baseUrl}/lp/migrate`);

        const response = await fetch(url.toString(), {
            method: "POST",
            body: JSON.stringify(parameters),
            headers: {
                "x-api-key": this.params.apiKey,
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to migrate LP: ${response.statusText}`);
        }

        const result = await response.json();
        
        // Convert response to EVMTransaction format
        const transaction: EVMTransaction = {
            to: result.transaction.to,
            data: result.transaction.data,
            value: result.transaction.value ? BigInt(result.transaction.value) : undefined,
        };
        
        return {
            transaction,
            gasFee: result.gasFee,
            positionId: result.positionId,
            simulationResults: parameters.simulateTransaction ? {
                gasUsed: result.simulationResults?.gasUsed,
                gasPrice: result.simulationResults?.gasPrice,
                totalCost: result.simulationResults?.totalCost,
            } : undefined,
        };
    }

    @Tool({
        description: "Get the router address for a specific chain.",
    })
    async getRouterAddress(parameters: GetRouterAddressSchema) {
        const routerAddresses: Record<number, string> = {
            1: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD", // Mainnet
            137: "0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2", // Polygon
            10: "0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8", // Optimism
            42161: "0x5E325eDA8064b456f4781070C0738d849c824258", // Arbitrum
            8453: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD", // Base
            324: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD", // zkSync
            7777777: "0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD", // Zora
        };

        const routerAddress = routerAddresses[parameters.chainId];
        if (!routerAddress) {
            throw new Error(`Router address not found for chain ID ${parameters.chainId}`);
        }

        return { routerAddress };
    }

    @Tool({
        description: "Get a list of commonly swappable tokens on the specified chain.",
    })
    async getSwappableTokens(parameters: GetSwappableTokensSchema) {
        // Since there's no direct API endpoint, we'll return a curated list of common tokens
        const commonTokens: Record<number, Array<{ symbol: string; address: string; decimals: number }>> = {
            1: [ // Mainnet
                { symbol: "WETH", address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", decimals: 18 },
                { symbol: "USDC", address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", decimals: 6 },
                { symbol: "USDT", address: "0xdAC17F958D2ee523a2206206994597C13D831ec7", decimals: 6 },
                { symbol: "DAI", address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", decimals: 18 },
            ],
            137: [ // Polygon
                { symbol: "WETH", address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", decimals: 18 },
                { symbol: "USDC", address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", decimals: 6 },
                { symbol: "USDT", address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", decimals: 6 },
                { symbol: "DAI", address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", decimals: 18 },
            ],
            8453: [ // Base
                { symbol: "WETH", address: "0x4200000000000000000000000000000000000006", decimals: 18 },
                { symbol: "USDbC", address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA", decimals: 6 },
                { symbol: "USDC", address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", decimals: 6 },
                { symbol: "DAI", address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb", decimals: 18 },
            ],
            10: [ // Optimism
                { symbol: "WETH", address: "0x4200000000000000000000000000000000000006", decimals: 18 },
                { symbol: "USDC", address: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607", decimals: 6 },
                { symbol: "DAI", address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", decimals: 18 },
            ],
            42161: [ // Arbitrum
                { symbol: "WETH", address: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1", decimals: 18 },
                { symbol: "USDC", address: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", decimals: 6 },
                { symbol: "USDT", address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", decimals: 6 },
                { symbol: "DAI", address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1", decimals: 18 },
            ],
        };

        const tokens = commonTokens[parameters.chainId];
        if (!tokens) {
            throw new Error(`No token list available for chain ID ${parameters.chainId}`);
        }

        return { tokens };
    }
}
