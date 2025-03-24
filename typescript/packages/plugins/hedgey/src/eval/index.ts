// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Hedgey claim rewards tool
 */
export const HEDGEY_CLAIM_REWARDS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Claim my Hedgey staking rewards",
        },
        referenceOutputs: {
            tool: "claim_hedgey_rewards",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Claim my tokens from Hedgey campaign 123456",
        },
        referenceOutputs: {
            tool: "claim_hedgey_rewards",
            response: '{"campaignIds":["123456"]}',
        },
    },
    {
        inputs: {
            query: "Get my claimable Hedgey rewards from campaigns 123456 and 789012",
        },
        referenceOutputs: {
            tool: "claim_hedgey_rewards",
            response: '{"campaignIds":["123456","789012"]}',
        },
    },
];

/**
 * Combined dataset for all Hedgey tools
 */
export const HEDGEY_ALL_TOOLS_DATASET: EvalDataset = [...HEDGEY_CLAIM_REWARDS_DATASET];
