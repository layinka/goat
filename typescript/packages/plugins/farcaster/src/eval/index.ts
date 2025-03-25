// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Farcaster get cast tool
 */
export const FARCASTER_GET_CAST_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the cast with hash 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        },
        referenceOutputs: {
            tool: "getCast",
            response:
                '{"identifier":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","type":"hash"}',
        },
    },
    {
        inputs: {
            query: "Show me the Farcaster post at https://warpcast.com/~/cast/0x1234567890abcdef1234567890abcdef",
        },
        referenceOutputs: {
            tool: "getCast",
            response: '{"identifier":"https://warpcast.com/~/cast/0x1234567890abcdef1234567890abcdef","type":"url"}',
        },
    },
];

/**
 * Dataset for testing Farcaster publish cast tool
 */
export const FARCASTER_PUBLISH_CAST_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Post 'Hello Farcaster world!' to my feed using signer uuid abc-123-def-456",
        },
        referenceOutputs: {
            tool: "publishCast",
            response: '{"signer_uuid":"abc-123-def-456","text":"Hello Farcaster world!"}',
        },
    },
    {
        inputs: {
            query: "Reply to cast 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef with 'Great post!' using signer uuid abc-123-def-456",
        },
        referenceOutputs: {
            tool: "publishCast",
            response:
                '{"signer_uuid":"abc-123-def-456","text":"Great post!","parent":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"}',
        },
    },
    {
        inputs: {
            query: "Post 'Discussing DeFi innovations' to the ethereum channel using signer uuid abc-123-def-456",
        },
        referenceOutputs: {
            tool: "publishCast",
            response: '{"signer_uuid":"abc-123-def-456","text":"Discussing DeFi innovations","channel_id":"ethereum"}',
        },
    },
];

/**
 * Dataset for testing Farcaster search casts tool
 */
export const FARCASTER_SEARCH_CASTS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Search for casts about 'Ethereum'",
        },
        referenceOutputs: {
            tool: "searchCasts",
            response: '{"query":"Ethereum"}',
        },
    },
    {
        inputs: {
            query: "Find the latest 20 posts about 'NFT marketplace'",
        },
        referenceOutputs: {
            tool: "searchCasts",
            response: '{"query":"NFT marketplace","limit":20}',
        },
    },
];

/**
 * Dataset for testing Farcaster get conversation tool
 */
export const FARCASTER_GET_CONVERSATION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me the conversation thread for cast 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
        },
        referenceOutputs: {
            tool: "getConversation",
            response:
                '{"identifier":"0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef","type":"hash"}',
        },
    },
    {
        inputs: {
            query: "Get the full discussion thread with 5 levels of replies for the cast at https://warpcast.com/~/cast/0x1234567890abcdef",
        },
        referenceOutputs: {
            tool: "getConversation",
            response: '{"identifier":"https://warpcast.com/~/cast/0x1234567890abcdef","type":"url","reply_depth":5}',
        },
    },
    {
        inputs: {
            query: "Show me the first 30 replies in the conversation for cast 0xabcdef1234567890abcdef1234567890abcdef",
        },
        referenceOutputs: {
            tool: "getConversation",
            response: '{"identifier":"0xabcdef1234567890abcdef1234567890abcdef","type":"hash","limit":30}',
        },
    },
];

/**
 * Combined dataset for all Farcaster tools
 */
export const FARCASTER_ALL_TOOLS_DATASET: EvalDataset = [
    ...FARCASTER_GET_CAST_DATASET,
    ...FARCASTER_PUBLISH_CAST_DATASET,
    ...FARCASTER_SEARCH_CASTS_DATASET,
    ...FARCASTER_GET_CONVERSATION_DATASET,
];
