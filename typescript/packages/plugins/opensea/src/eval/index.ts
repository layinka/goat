// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing OpenSea get NFT collection statistics tool
 */
export const OPENSEA_GET_NFT_COLLECTION_STATISTICS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get statistics for the Bored Ape Yacht Club NFT collection",
        },
        referenceOutputs: {
            tool: "getNftCollectionStatistics",
            response: '{"collectionSlug":"boredapeyachtclub"}',
        },
    },
    {
        inputs: {
            query: "Show me the floor price and trading volume for Azuki collection",
        },
        referenceOutputs: {
            tool: "getNftCollectionStatistics",
            response: '{"collectionSlug":"azuki"}',
        },
    },
    {
        inputs: {
            query: "What are the current market statistics for Doodles NFT collection?",
        },
        referenceOutputs: {
            tool: "getNftCollectionStatistics",
            response: '{"collectionSlug":"doodles-official"}',
        },
    },
];

/**
 * Dataset for testing OpenSea get NFT sales tool
 */
export const OPENSEA_GET_NFT_SALES_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me recent sales for the Bored Ape Yacht Club collection",
        },
        referenceOutputs: {
            tool: "getNftSales",
            response: '{"collectionSlug":"boredapeyachtclub"}',
        },
    },
    {
        inputs: {
            query: "What are the latest transactions for Azuki NFTs?",
        },
        referenceOutputs: {
            tool: "getNftSales",
            response: '{"collectionSlug":"azuki"}',
        },
    },
    {
        inputs: {
            query: "List the most recent Doodles NFT purchases",
        },
        referenceOutputs: {
            tool: "getNftSales",
            response: '{"collectionSlug":"doodles-official"}',
        },
    },
];

/**
 * Combined dataset for all OpenSea tools
 */
export const OPENSEA_ALL_TOOLS_DATASET: EvalDataset = [
    ...OPENSEA_GET_NFT_COLLECTION_STATISTICS_DATASET,
    ...OPENSEA_GET_NFT_SALES_DATASET,
];
