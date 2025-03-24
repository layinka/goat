# Dataset for testing OpenSea get NFT collection statistics tool
OPENSEA_GET_NFT_COLLECTION_STATISTICS_DATASET = [
    {
        "inputs": {
            "query": "What are the statistics for the Bored Ape Yacht Club NFT collection on OpenSea?",
        },
        "referenceOutputs": {
            "tool": "get_nft_collection_statistics",
            "response": '{"collectionSlug":"boredapeyachtclub"}',
        },
    },
    {
        "inputs": {
            "query": "Show me the floor price and volume for Azuki collection on OpenSea",
        },
        "referenceOutputs": {
            "tool": "get_nft_collection_statistics",
            "response": '{"collectionSlug":"azuki"}',
        },
    },
    {
        "inputs": {
            "query": "Get the trading statistics for Doodles NFT collection from OpenSea",
        },
        "referenceOutputs": {
            "tool": "get_nft_collection_statistics",
            "response": '{"collectionSlug":"doodles-official"}',
        },
    },
]

# Dataset for testing OpenSea get NFT sales tool
OPENSEA_GET_NFT_SALES_DATASET = [
    {
        "inputs": {
            "query": "What are the recent sales for the Bored Ape Yacht Club NFT collection on OpenSea?",
        },
        "referenceOutputs": {
            "tool": "get_nft_sales",
            "response": '{"collectionSlug":"boredapeyachtclub"}',
        },
    },
    {
        "inputs": {
            "query": "Show me the latest Azuki NFT transactions on OpenSea",
        },
        "referenceOutputs": {
            "tool": "get_nft_sales",
            "response": '{"collectionSlug":"azuki"}',
        },
    },
    {
        "inputs": {
            "query": "Get the most recent Doodles NFT sales from OpenSea",
        },
        "referenceOutputs": {
            "tool": "get_nft_sales",
            "response": '{"collectionSlug":"doodles-official"}',
        },
    },
]

# Combined dataset for all OpenSea tools
OPENSEA_ALL_TOOLS_DATASET = (
    OPENSEA_GET_NFT_COLLECTION_STATISTICS_DATASET +
    OPENSEA_GET_NFT_SALES_DATASET
)
