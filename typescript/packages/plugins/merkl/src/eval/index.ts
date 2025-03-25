// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Merkl claim incentives tool
 */
export const MERKL_CLAIM_INCENTIVES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Claim my Merkl rewards",
        },
        referenceOutputs: {
            tool: "claim_merkl_incentives",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Get my protocol incentives from Merkl",
        },
        referenceOutputs: {
            tool: "claim_merkl_incentives",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Collect all available Merkl rewards for my address",
        },
        referenceOutputs: {
            tool: "claim_merkl_incentives",
            response: "{}",
        },
    },
];

/**
 * Combined dataset for all Merkl tools
 */
export const MERKL_ALL_TOOLS_DATASET: EvalDataset = [...MERKL_CLAIM_INCENTIVES_DATASET];
