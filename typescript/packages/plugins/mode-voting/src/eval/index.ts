// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Mode Voting get all gauges tool
 */
export const MODE_VOTING_GET_ALL_GAUGES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "List all available gauges for veMODE on Mode Network",
        },
        referenceOutputs: {
            tool: "get_all_gauges_mode",
            response: '{"voterType":"veMODE"}',
        },
    },
    {
        inputs: {
            query: "Show me all veBPT gauges on Mode",
        },
        referenceOutputs: {
            tool: "get_all_gauges_mode",
            response: '{"voterType":"veBPT"}',
        },
    },
];

/**
 * Dataset for testing Mode Voting get gauge info tool
 */
export const MODE_VOTING_GET_GAUGE_INFO_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get information about gauge 0x1234567890123456789012345678901234567890 for veMODE",
        },
        referenceOutputs: {
            tool: "get_gauge_info_mode",
            response: '{"voterType":"veMODE","gaugeAddress":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Show details of veBPT gauge 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "get_gauge_info_mode",
            response: '{"voterType":"veBPT","gaugeAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
];

/**
 * Dataset for testing Mode Voting vote on gauges tool
 */
export const MODE_VOTING_VOTE_ON_GAUGES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Vote on veMODE gauges with token ID 123, giving 60 weight to 0x1111111111111111111111111111111111111111 and 40 weight to 0x2222222222222222222222222222222222222222",
        },
        referenceOutputs: {
            tool: "vote_on_gauges_mode",
            response:
                '{"voterType":"veMODE","tokenId":"123","votes":[{"gauge":"0x1111111111111111111111111111111111111111","weight":"60"},{"gauge":"0x2222222222222222222222222222222222222222","weight":"40"}]}',
        },
    },
    {
        inputs: {
            query: "Allocate my veBPT voting power with token ID 456, 100% to gauge 0x3333333333333333333333333333333333333333",
        },
        referenceOutputs: {
            tool: "vote_on_gauges_mode",
            response:
                '{"voterType":"veBPT","tokenId":"456","votes":[{"gauge":"0x3333333333333333333333333333333333333333","weight":"100"}]}',
        },
    },
];

/**
 * Dataset for testing Mode Voting change votes tool
 */
export const MODE_VOTING_CHANGE_VOTES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Change my veMODE votes for token ID 123, now giving 30 weight to 0x1111111111111111111111111111111111111111 and 70 weight to 0x2222222222222222222222222222222222222222",
        },
        referenceOutputs: {
            tool: "change_votes_mode",
            response:
                '{"voterType":"veMODE","tokenId":"123","votes":[{"gauge":"0x1111111111111111111111111111111111111111","weight":"30"},{"gauge":"0x2222222222222222222222222222222222222222","weight":"70"}]}',
        },
    },
    {
        inputs: {
            query: "Update my veBPT voting allocation for token ID 456, split 50/50 between 0x3333333333333333333333333333333333333333 and 0x4444444444444444444444444444444444444444",
        },
        referenceOutputs: {
            tool: "change_votes_mode",
            response:
                '{"voterType":"veBPT","tokenId":"456","votes":[{"gauge":"0x3333333333333333333333333333333333333333","weight":"50"},{"gauge":"0x4444444444444444444444444444444444444444","weight":"50"}]}',
        },
    },
];

/**
 * Dataset for testing Mode Voting get voting power tool
 */
export const MODE_VOTING_GET_VOTING_POWER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the voting power of my veMODE token ID 123?",
        },
        referenceOutputs: {
            tool: "get_voting_power_mode",
            response: '{"voterType":"veMODE","tokenId":"123"}',
        },
    },
    {
        inputs: {
            query: "Check the voting power for veBPT token ID 456",
        },
        referenceOutputs: {
            tool: "get_voting_power_mode",
            response: '{"voterType":"veBPT","tokenId":"456"}',
        },
    },
];

/**
 * Combined dataset for all Mode Voting tools
 */
export const MODE_VOTING_ALL_TOOLS_DATASET: EvalDataset = [
    ...MODE_VOTING_GET_ALL_GAUGES_DATASET,
    ...MODE_VOTING_GET_GAUGE_INFO_DATASET,
    ...MODE_VOTING_VOTE_ON_GAUGES_DATASET,
    ...MODE_VOTING_CHANGE_VOTES_DATASET,
    ...MODE_VOTING_GET_VOTING_POWER_DATASET,
];
