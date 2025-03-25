// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Tensor get NFT info tool
 */
export const TENSOR_GET_NFT_INFO_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get information about NFT with mint hash ABC123 on Tensor",
        },
        referenceOutputs: {
            tool: "getNftInfo",
            response: '{"mintHash":"ABC123"}',
        },
    },
    {
        inputs: {
            query: "Show me details for the NFT with mint address XYZ789 on Tensor",
        },
        referenceOutputs: {
            tool: "getNftInfo",
            response: '{"mintHash":"XYZ789"}',
        },
    },
    {
        inputs: {
            query: "What are the details of the Solana NFT with mint hash DEF456 on Tensor?",
        },
        referenceOutputs: {
            tool: "getNftInfo",
            response: '{"mintHash":"DEF456"}',
        },
    },
];

/**
 * Dataset for testing Tensor buy listing transaction tool
 */
export const TENSOR_GET_BUY_LISTING_TRANSACTION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Buy NFT with mint hash ABC123 from Tensor",
        },
        referenceOutputs: {
            tool: "getBuyListingTransaction",
            response: '{"mintHash":"ABC123"}',
        },
    },
    {
        inputs: {
            query: "Purchase the NFT with mint address XYZ789 on Tensor",
        },
        referenceOutputs: {
            tool: "getBuyListingTransaction",
            response: '{"mintHash":"XYZ789"}',
        },
    },
    {
        inputs: {
            query: "Execute a buy transaction for the NFT with mint hash DEF456 on Tensor",
        },
        referenceOutputs: {
            tool: "getBuyListingTransaction",
            response: '{"mintHash":"DEF456"}',
        },
    },
];

/**
 * Combined dataset for all Tensor tools
 */
export const TENSOR_ALL_TOOLS_DATASET: EvalDataset = [
    ...TENSOR_GET_NFT_INFO_DATASET,
    ...TENSOR_GET_BUY_LISTING_TRANSACTION_DATASET,
];
