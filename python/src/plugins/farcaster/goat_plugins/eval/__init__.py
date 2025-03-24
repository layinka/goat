# Dataset for testing Farcaster get cast tool
FARCASTER_GET_CAST_DATASET = [
    {
        "inputs": {
            "query": "Get the Farcaster cast with hash 0x1234567890abcdef",
        },
        "referenceOutputs": {
            "tool": "get_cast",
            "response": '{"identifier":"0x1234567890abcdef","type":"hash"}',
        },
    },
    {
        "inputs": {
            "query": "Show me the Farcaster post at https://warpcast.com/example/0x987654321",
        },
        "referenceOutputs": {
            "tool": "get_cast",
            "response": '{"identifier":"https://warpcast.com/example/0x987654321","type":"url"}',
        },
    },
    {
        "inputs": {
            "query": "Retrieve the cast with ID 0xabcdef1234567890",
        },
        "referenceOutputs": {
            "tool": "get_cast",
            "response": '{"identifier":"0xabcdef1234567890","type":"hash"}',
        },
    },
]

# Dataset for testing Farcaster publish cast tool
FARCASTER_PUBLISH_CAST_DATASET = [
    {
        "inputs": {
            "query": "Post 'Hello Farcaster world!' on my account with signer uuid abc-123",
        },
        "referenceOutputs": {
            "tool": "publish_cast",
            "response": '{"signer_uuid":"abc-123","text":"Hello Farcaster world!"}',
        },
    },
    {
        "inputs": {
            "query": "Create a new cast saying 'Testing the GOAT SDK' with signer xyz-789",
        },
        "referenceOutputs": {
            "tool": "publish_cast",
            "response": '{"signer_uuid":"xyz-789","text":"Testing the GOAT SDK"}',
        },
    },
    {
        "inputs": {
            "query": "Reply to cast 0x1234567890abcdef with 'Great post!' using signer def-456",
        },
        "referenceOutputs": {
            "tool": "publish_cast",
            "response": '{"signer_uuid":"def-456","text":"Great post!","parent":{"identifier":"0x1234567890abcdef","type":"hash"}}',
        },
    },
]

# Dataset for testing Farcaster search casts tool
FARCASTER_SEARCH_CASTS_DATASET = [
    {
        "inputs": {
            "query": "Search for casts about 'Ethereum' on Farcaster",
        },
        "referenceOutputs": {
            "tool": "search_casts",
            "response": '{"query":"Ethereum"}',
        },
    },
    {
        "inputs": {
            "query": "Find the latest 50 posts about 'NFTs' on Farcaster",
        },
        "referenceOutputs": {
            "tool": "search_casts",
            "response": '{"query":"NFTs","limit":50}',
        },
    },
    {
        "inputs": {
            "query": "Look for Farcaster posts mentioning 'GOAT SDK'",
        },
        "referenceOutputs": {
            "tool": "search_casts",
            "response": '{"query":"GOAT SDK"}',
        },
    },
]

# Dataset for testing Farcaster get conversation tool
FARCASTER_GET_CONVERSATION_DATASET = [
    {
        "inputs": {
            "query": "Get the conversation for cast 0x1234567890abcdef",
        },
        "referenceOutputs": {
            "tool": "get_conversation",
            "response": '{"identifier":"0x1234567890abcdef","type":"hash"}',
        },
    },
    {
        "inputs": {
            "query": "Show me the thread for the post at https://warpcast.com/example/0x987654321 with 5 levels of replies",
        },
        "referenceOutputs": {
            "tool": "get_conversation",
            "response": '{"identifier":"https://warpcast.com/example/0x987654321","type":"url","reply_depth":5}',
        },
    },
    {
        "inputs": {
            "query": "Retrieve the full conversation for cast 0xabcdef1234567890 with 100 replies",
        },
        "referenceOutputs": {
            "tool": "get_conversation",
            "response": '{"identifier":"0xabcdef1234567890","type":"hash","limit":100}',
        },
    },
]

# Combined dataset for all Farcaster tools
FARCASTER_ALL_TOOLS_DATASET = (
    FARCASTER_GET_CAST_DATASET +
    FARCASTER_PUBLISH_CAST_DATASET +
    FARCASTER_SEARCH_CASTS_DATASET +
    FARCASTER_GET_CONVERSATION_DATASET
)
