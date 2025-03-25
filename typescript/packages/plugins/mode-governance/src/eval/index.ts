// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Mode Governance stake tool
 */
export const MODE_GOVERNANCE_STAKE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Stake 100 MODE tokens for governance",
        },
        referenceOutputs: {
            tool: "executeGovernanceStake",
            response: '{"tokenType":"MODE","amount":"100000000000000000000"}',
        },
    },
    {
        inputs: {
            query: "Lock 50 BPT tokens in Mode Governance",
        },
        referenceOutputs: {
            tool: "executeGovernanceStake",
            response: '{"tokenType":"BPT","amount":"50000000000000000000"}',
        },
    },
];

/**
 * Dataset for testing Mode Governance info tool
 */
export const MODE_GOVERNANCE_INFO_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get my MODE governance information",
        },
        referenceOutputs: {
            tool: "getModeGovernanceInfo",
            response: '{"tokenType":"MODE"}',
        },
    },
    {
        inputs: {
            query: "Check my BPT staking position in Mode Governance",
        },
        referenceOutputs: {
            tool: "getModeGovernanceInfo",
            response: '{"tokenType":"BPT"}',
        },
    },
];

/**
 * Dataset for testing Mode Governance voting power tool
 */
export const MODE_GOVERNANCE_VOTING_POWER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my veMode voting power?",
        },
        referenceOutputs: {
            tool: "getModeGovernanceVotingPower",
            response: '{"tokenType":"veMode"}',
        },
    },
    {
        inputs: {
            query: "Check the veBPT voting power for address 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "getModeGovernanceVotingPower",
            response: '{"tokenType":"veBPT","address":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Combined dataset for all Mode Governance tools
 */
export const MODE_GOVERNANCE_ALL_TOOLS_DATASET: EvalDataset = [
    ...MODE_GOVERNANCE_STAKE_DATASET,
    ...MODE_GOVERNANCE_INFO_DATASET,
    ...MODE_GOVERNANCE_VOTING_POWER_DATASET,
];
