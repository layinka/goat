// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Meteora create DLMM position tool
 */
export const METEORA_CREATE_DLMM_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a position on Meteora DEX for SOL/USDC pool",
        },
        referenceOutputs: {
            tool: "createDLMMPosition",
            response: '{"poolAddress":"8JUjWjAyXTMB4ZXs1wKWuCkNw3JBCEzq6Xjg61aJYxLh","amount":"1"}',
        },
    },
    {
        inputs: {
            query: "Add liquidity to Meteora DEX with 2 SOL",
        },
        referenceOutputs: {
            tool: "createDLMMPosition",
            response: '{"poolAddress":"8JUjWjAyXTMB4ZXs1wKWuCkNw3JBCEzq6Xjg61aJYxLh","amount":"2"}',
        },
    },
    {
        inputs: {
            query: "Open a new position in the BONK/USDC pool on Meteora with 1000 BONK",
        },
        referenceOutputs: {
            tool: "createDLMMPosition",
            response: '{"poolAddress":"BqnpCdDLPRjiuT1ufxBLuaUq1Auwz5A9jkSU7fXNyvjj","amount":"1000"}',
        },
    },
];

/**
 * Combined dataset for all Meteora tools
 */
export const METEORA_ALL_TOOLS_DATASET: EvalDataset = [...METEORA_CREATE_DLMM_POSITION_DATASET];
