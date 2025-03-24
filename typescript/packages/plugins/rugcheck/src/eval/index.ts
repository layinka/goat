// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing RugCheck get recently detected tokens tool
 */
export const RUGCHECK_GET_RECENTLY_DETECTED_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me recently detected tokens on RugCheck",
        },
        referenceOutputs: {
            tool: "rugcheck_get_recently_detected_tokens",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "What are the newest tokens found by RugCheck?",
        },
        referenceOutputs: {
            tool: "rugcheck_get_recently_detected_tokens",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing RugCheck get trending tokens 24h tool
 */
export const RUGCHECK_GET_TRENDING_TOKENS_24H_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What tokens are trending in the last 24 hours on RugCheck?",
        },
        referenceOutputs: {
            tool: "rugcheck_get_trending_tokens_24h",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Show me the most popular tokens in the past day according to RugCheck",
        },
        referenceOutputs: {
            tool: "rugcheck_get_trending_tokens_24h",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing RugCheck get most voted tokens 24h tool
 */
export const RUGCHECK_GET_MOST_VOTED_TOKENS_24H_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Which tokens received the most votes in the last 24 hours on RugCheck?",
        },
        referenceOutputs: {
            tool: "rugcheck_get_most_voted_tokens_24h",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Show me the tokens with the highest number of votes in the past day on RugCheck",
        },
        referenceOutputs: {
            tool: "rugcheck_get_most_voted_tokens_24h",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing RugCheck get recently verified tokens tool
 */
export const RUGCHECK_GET_RECENTLY_VERIFIED_TOKENS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What tokens were recently verified on RugCheck?",
        },
        referenceOutputs: {
            tool: "rugcheck_get_recently_verified_tokens",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Show me the latest verified tokens from RugCheck",
        },
        referenceOutputs: {
            tool: "rugcheck_get_recently_verified_tokens",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing RugCheck generate token report summary tool
 */
export const RUGCHECK_GENERATE_TOKEN_REPORT_SUMMARY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Generate a report summary for token with mint address ABC123",
        },
        referenceOutputs: {
            tool: "rugcheck_generate_token_report_summary",
            response: '{"mint":"ABC123"}',
        },
    },
    {
        inputs: {
            query: "Check if token XYZ789 is safe using RugCheck",
        },
        referenceOutputs: {
            tool: "rugcheck_generate_token_report_summary",
            response: '{"mint":"XYZ789"}',
        },
    },
];

/**
 * Combined dataset for all RugCheck tools
 */
export const RUGCHECK_ALL_TOOLS_DATASET: EvalDataset = [
    ...RUGCHECK_GET_RECENTLY_DETECTED_TOKENS_DATASET,
    ...RUGCHECK_GET_TRENDING_TOKENS_24H_DATASET,
    ...RUGCHECK_GET_MOST_VOTED_TOKENS_24H_DATASET,
    ...RUGCHECK_GET_RECENTLY_VERIFIED_TOKENS_DATASET,
    ...RUGCHECK_GENERATE_TOKEN_REPORT_SUMMARY_DATASET,
];
