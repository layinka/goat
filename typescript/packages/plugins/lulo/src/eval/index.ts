// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Lulo deposit USDC tool
 */
export const LULO_DEPOSIT_USDC_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Deposit 100 USDC into Lulo",
        },
        referenceOutputs: {
            tool: "lulo_deposit_usdc",
            response: '{"amount":"100"}',
        },
    },
    {
        inputs: {
            query: "Add 50 USDC to my Lulo account",
        },
        referenceOutputs: {
            tool: "lulo_deposit_usdc",
            response: '{"amount":"50"}',
        },
    },
    {
        inputs: {
            query: "Transfer 200 USDC to Lulo",
        },
        referenceOutputs: {
            tool: "lulo_deposit_usdc",
            response: '{"amount":"200"}',
        },
    },
];

/**
 * Combined dataset for all Lulo tools
 */
export const LULO_ALL_TOOLS_DATASET: EvalDataset = [...LULO_DEPOSIT_USDC_DATASET];
