// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Magic Eden get NFT listings tool
 */
export const MAGIC_EDEN_GET_NFT_LISTINGS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get listings for NFT with mint hash ABC123",
        },
        referenceOutputs: {
            tool: "getNftListings",
            response: '{"mintHash":"ABC123"}',
        },
    },
    {
        inputs: {
            query: "Show me the current listings for NFT with mint address XYZ789",
        },
        referenceOutputs: {
            tool: "getNftListings",
            response: '{"mintHash":"XYZ789"}',
        },
    },
    {
        inputs: {
            query: "What are the available Magic Eden listings for NFT with mint hash DEF456?",
        },
        referenceOutputs: {
            tool: "getNftListings",
            response: '{"mintHash":"DEF456"}',
        },
    },
];

/**
 * Dataset for testing Magic Eden buy listing transaction tool
 */
export const MAGIC_EDEN_GET_BUY_LISTING_TRANSACTION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Buy NFT with mint hash ABC123 from Magic Eden",
        },
        referenceOutputs: {
            tool: "getBuyListingTransaction",
            response: '{"mintHash":"ABC123"}',
        },
    },
    {
        inputs: {
            query: "Purchase the NFT with mint address XYZ789 on Magic Eden",
        },
        referenceOutputs: {
            tool: "getBuyListingTransaction",
            response: '{"mintHash":"XYZ789"}',
        },
    },
    {
        inputs: {
            query: "Execute a buy transaction for the NFT with mint hash DEF456 on Magic Eden",
        },
        referenceOutputs: {
            tool: "getBuyListingTransaction",
            response: '{"mintHash":"DEF456"}',
        },
    },
];

/**
 * Combined dataset for all Magic Eden tools
 */
export const MAGIC_EDEN_ALL_TOOLS_DATASET: EvalDataset = [
    ...MAGIC_EDEN_GET_NFT_LISTINGS_DATASET,
    ...MAGIC_EDEN_GET_BUY_LISTING_TRANSACTION_DATASET,
];
