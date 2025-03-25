// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing 1inch balance service
 */
export const ONEINCH_BALANCES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What are my token balances?",
        },
        referenceOutputs: {
            tool: "1inch_get_balances",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Check the balances for wallet 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "1inch_get_balances",
            response: '{"walletAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Show me all my token balances on Ethereum",
        },
        referenceOutputs: {
            tool: "1inch_get_balances",
            response: "{}",
        },
    },
];

/**
 * Combined dataset for all 1inch tools
 */
export const ONEINCH_ALL_TOOLS_DATASET: EvalDataset = [...ONEINCH_BALANCES_DATASET];
