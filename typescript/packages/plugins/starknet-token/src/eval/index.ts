// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Starknet get token info by symbol tool
 */
export const STARKNET_GET_TOKEN_INFO_BY_SYMBOL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the contract address for ETH on Starknet?",
        },
        referenceOutputs: {
            tool: "getTokenInfoBySymbol",
            response: '{"symbol":"ETH"}',
        },
    },
    {
        inputs: {
            query: "Get information about the USDC token on Starknet",
        },
        referenceOutputs: {
            tool: "getTokenInfoBySymbol",
            response: '{"symbol":"USDC"}',
        },
    },
    {
        inputs: {
            query: "Show me details for the STRK token on Starknet",
        },
        referenceOutputs: {
            tool: "getTokenInfoBySymbol",
            response: '{"symbol":"STRK"}',
        },
    },
];

/**
 * Dataset for testing Starknet get token balance by address tool
 */
export const STARKNET_GET_TOKEN_BALANCE_BY_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my balance of token at address 0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7 on Starknet?",
        },
        referenceOutputs: {
            tool: "getTokenBalanceByAddress",
            response:
                '{"walletAddress":"0x1234567890123456789012345678901234567890","tokenAddress":"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7","decimals":18}',
        },
    },
    {
        inputs: {
            query: "Check my USDC balance on Starknet with contract 0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
        },
        referenceOutputs: {
            tool: "getTokenBalanceByAddress",
            response:
                '{"walletAddress":"0x1234567890123456789012345678901234567890","tokenAddress":"0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8","decimals":6}',
        },
    },
];

/**
 * Dataset for testing Starknet transfer token tool
 */
export const STARKNET_TRANSFER_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Transfer 1 ETH to address 0x1234567890123456789012345678901234567890 on Starknet",
        },
        referenceOutputs: {
            tool: "transferToken",
            response:
                '{"tokenAddress":"0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7","to":"0x1234567890123456789012345678901234567890","amount":"1000000000000000000"}',
        },
    },
    {
        inputs: {
            query: "Send 100 USDC to 0xabcdef1234567890abcdef1234567890abcdef12 on Starknet",
        },
        referenceOutputs: {
            tool: "transferToken",
            response:
                '{"tokenAddress":"0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8","to":"0xabcdef1234567890abcdef1234567890abcdef12","amount":"100000000"}',
        },
    },
];

/**
 * Dataset for testing Starknet convert to base unit tool
 */
export const STARKNET_CONVERT_TO_BASE_UNIT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Convert 1 ETH to base units on Starknet",
        },
        referenceOutputs: {
            tool: "convertToBaseUnit",
            response: '{"amount":1,"decimals":18}',
        },
    },
    {
        inputs: {
            query: "How many wei is 0.5 ETH on Starknet?",
        },
        referenceOutputs: {
            tool: "convertToBaseUnit",
            response: '{"amount":0.5,"decimals":18}',
        },
    },
    {
        inputs: {
            query: "Convert 10 USDC to its smallest unit on Starknet",
        },
        referenceOutputs: {
            tool: "convertToBaseUnit",
            response: '{"amount":10,"decimals":6}',
        },
    },
];

/**
 * Combined dataset for all Starknet token tools
 */
export const STARKNET_TOKEN_ALL_TOOLS_DATASET: EvalDataset = [
    ...STARKNET_GET_TOKEN_INFO_BY_SYMBOL_DATASET,
    ...STARKNET_GET_TOKEN_BALANCE_BY_ADDRESS_DATASET,
    ...STARKNET_TRANSFER_TOKEN_DATASET,
    ...STARKNET_CONVERT_TO_BASE_UNIT_DATASET,
];
