// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Solana NFT transfer tool
 */
export const SOLANA_NFT_TRANSFER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Transfer my NFT with asset ID ABC123 to address 5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8 on Solana",
        },
        referenceOutputs: {
            tool: "transferNFT",
            response: '{"recipientAddress":"5YNmS1R9nNSCDzb5a7mMJ1dwK9uHeAAF4CmPEwKgVWr8","assetId":"ABC123"}',
        },
    },
    {
        inputs: {
            query: "Send my Solana NFT with ID XYZ789 to DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        },
        referenceOutputs: {
            tool: "transferNFT",
            response: '{"recipientAddress":"DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263","assetId":"XYZ789"}',
        },
    },
    {
        inputs: {
            query: "Move my compressed NFT with asset ID DEF456 to wallet address 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",
        },
        referenceOutputs: {
            tool: "transferNFT",
            response: '{"recipientAddress":"9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin","assetId":"DEF456"}',
        },
    },
];

/**
 * Combined dataset for all Solana NFTs tools
 */
export const SOLANA_NFTS_ALL_TOOLS_DATASET: EvalDataset = [...SOLANA_NFT_TRANSFER_DATASET];
