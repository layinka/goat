// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing ERC721 balance tool
 */
export const ERC721_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "How many CryptoPunks NFTs do I own?",
        },
        referenceOutputs: {
            tool: "get_CryptoPunks_balance",
            response: '{"owner":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Check my BAYC NFT balance",
        },
        referenceOutputs: {
            tool: "get_BAYC_balance",
            response: '{"owner":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing ERC721 transfer tool
 */
export const ERC721_TRANSFER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Transfer my CryptoPunks NFT with token ID 123 to 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "transfer_CryptoPunks",
            response: '{"to":"0xabcdef1234567890abcdef1234567890abcdef12","tokenId":"123"}',
        },
    },
    {
        inputs: {
            query: "Send my BAYC #456 to wallet 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "transfer_BAYC",
            response: '{"to":"0xabcdef1234567890abcdef1234567890abcdef12","tokenId":"456"}',
        },
    },
];

/**
 * Dataset for testing ERC721 total supply tool
 */
export const ERC721_TOTAL_SUPPLY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the total supply of CryptoPunks?",
        },
        referenceOutputs: {
            tool: "get_CryptoPunks_total_supply",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "How many BAYC NFTs exist in total?",
        },
        referenceOutputs: {
            tool: "get_BAYC_total_supply",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing ERC721 approve tool
 */
export const ERC721_APPROVE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Approve address 0xabcdef1234567890abcdef1234567890abcdef12 to transfer my CryptoPunks NFT with token ID 123",
        },
        referenceOutputs: {
            tool: "approve_CryptoPunks",
            response: '{"to":"0xabcdef1234567890abcdef1234567890abcdef12","tokenId":"123"}',
        },
    },
    {
        inputs: {
            query: "Give permission to 0xabcdef1234567890abcdef1234567890abcdef12 to transfer my BAYC #456",
        },
        referenceOutputs: {
            tool: "approve_BAYC",
            response: '{"to":"0xabcdef1234567890abcdef1234567890abcdef12","tokenId":"456"}',
        },
    },
];

/**
 * Dataset for testing ERC721 transfer from tool
 */
export const ERC721_TRANSFER_FROM_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Transfer CryptoPunks NFT with token ID 123 from 0x1234567890123456789012345678901234567890 to 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "transfer_CryptoPunks_from",
            response:
                '{"from":"0x1234567890123456789012345678901234567890","to":"0xabcdef1234567890abcdef1234567890abcdef12","tokenId":"123"}',
        },
    },
    {
        inputs: {
            query: "Move BAYC #456 from 0x1234567890123456789012345678901234567890 to 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "transfer_BAYC_from",
            response:
                '{"from":"0x1234567890123456789012345678901234567890","to":"0xabcdef1234567890abcdef1234567890abcdef12","tokenId":"456"}',
        },
    },
];

/**
 * Combined dataset for all ERC721 tools
 */
export const ERC721_ALL_TOOLS_DATASET: EvalDataset = [
    ...ERC721_BALANCE_DATASET,
    ...ERC721_TRANSFER_DATASET,
    ...ERC721_TOTAL_SUPPLY_DATASET,
    ...ERC721_APPROVE_DATASET,
    ...ERC721_TRANSFER_FROM_DATASET,
];
