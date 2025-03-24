// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing ERC1155 get token info by symbol tool
 */
export const ERC1155_GET_TOKEN_INFO_BY_SYMBOL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get information about the NFT with symbol GOAT",
        },
        referenceOutputs: {
            tool: "getTokenInfoBySymbol",
            response: '{"symbol":"GOAT"}',
        },
    },
    {
        inputs: {
            query: "Show me details for the LAND token",
        },
        referenceOutputs: {
            tool: "getTokenInfoBySymbol",
            response: '{"symbol":"LAND"}',
        },
    },
];

/**
 * Dataset for testing ERC1155 balance of tool
 */
export const ERC1155_BALANCE_OF_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my balance of token ID 123 at contract 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "balanceOf",
            response:
                '{"tokenAddress":"0x1234567890123456789012345678901234567890","owner":"0xabcdef1234567890abcdef1234567890abcdef12","id":"123"}',
        },
    },
    {
        inputs: {
            query: "Check how many NFTs with ID 456 I own from collection 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "balanceOf",
            response:
                '{"tokenAddress":"0xabcdef1234567890abcdef1234567890abcdef12","owner":"0x1234567890123456789012345678901234567890","id":"456"}',
        },
    },
];

/**
 * Dataset for testing ERC1155 balance of batch tool
 */
export const ERC1155_BALANCE_OF_BATCH_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the balances of token IDs 123 and 456 for addresses 0x1234567890123456789012345678901234567890 and 0xabcdef1234567890abcdef1234567890abcdef12 at contract 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "balanceOfBatch",
            response:
                '{"tokenAddress":"0x9876543210987654321098765432109876543210","owners":["0x1234567890123456789012345678901234567890","0xabcdef1234567890abcdef1234567890abcdef12"],"ids":["123","456"]}',
        },
    },
];

/**
 * Dataset for testing ERC1155 safe transfer from tool
 */
export const ERC1155_SAFE_TRANSFER_FROM_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Transfer 2 tokens with ID 123 from 0x1234567890123456789012345678901234567890 to 0xabcdef1234567890abcdef1234567890abcdef12 on contract 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "safeTransferFrom",
            response:
                '{"tokenAddress":"0x9876543210987654321098765432109876543210","from":"0x1234567890123456789012345678901234567890","to":"0xabcdef1234567890abcdef1234567890abcdef12","id":"123","value":2}',
        },
    },
    {
        inputs: {
            query: "Send my NFT with ID 456 to address 0xabcdef1234567890abcdef1234567890abcdef12 from the collection at 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "safeTransferFrom",
            response:
                '{"tokenAddress":"0x9876543210987654321098765432109876543210","from":"0x1234567890123456789012345678901234567890","to":"0xabcdef1234567890abcdef1234567890abcdef12","id":"456","value":1}',
        },
    },
];

/**
 * Dataset for testing ERC1155 safe batch transfer from tool
 */
export const ERC1155_SAFE_BATCH_TRANSFER_FROM_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Transfer tokens with IDs 123 and 456 (2 of each) from 0x1234567890123456789012345678901234567890 to 0xabcdef1234567890abcdef1234567890abcdef12 on contract 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "safeBatchTransferFrom",
            response:
                '{"tokenAddress":"0x9876543210987654321098765432109876543210","from":"0x1234567890123456789012345678901234567890","to":"0xabcdef1234567890abcdef1234567890abcdef12","ids":["123","456"],"values":[2,2]}',
        },
    },
];

/**
 * Dataset for testing ERC1155 set approval for all tool
 */
export const ERC1155_SET_APPROVAL_FOR_ALL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Approve operator 0xabcdef1234567890abcdef1234567890abcdef12 to manage all my tokens on contract 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "setApprovalForAll",
            response:
                '{"tokenAddress":"0x9876543210987654321098765432109876543210","operator":"0xabcdef1234567890abcdef1234567890abcdef12","approved":true}',
        },
    },
    {
        inputs: {
            query: "Revoke approval for operator 0xabcdef1234567890abcdef1234567890abcdef12 to manage my tokens on contract 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "setApprovalForAll",
            response:
                '{"tokenAddress":"0x9876543210987654321098765432109876543210","operator":"0xabcdef1234567890abcdef1234567890abcdef12","approved":false}',
        },
    },
];

/**
 * Dataset for testing ERC1155 is approved for all tool
 */
export const ERC1155_IS_APPROVED_FOR_ALL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check if operator 0xabcdef1234567890abcdef1234567890abcdef12 is approved to manage tokens owned by 0x1234567890123456789012345678901234567890 on contract 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "isApprovedForAll",
            response:
                '{"tokenAddress":"0x9876543210987654321098765432109876543210","owner":"0x1234567890123456789012345678901234567890","operator":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
];

/**
 * Combined dataset for all ERC1155 tools
 */
export const ERC1155_ALL_TOOLS_DATASET: EvalDataset = [
    ...ERC1155_GET_TOKEN_INFO_BY_SYMBOL_DATASET,
    ...ERC1155_BALANCE_OF_DATASET,
    ...ERC1155_BALANCE_OF_BATCH_DATASET,
    ...ERC1155_SAFE_TRANSFER_FROM_DATASET,
    ...ERC1155_SAFE_BATCH_TRANSFER_FROM_DATASET,
    ...ERC1155_SET_APPROVAL_FOR_ALL_DATASET,
    ...ERC1155_IS_APPROVED_FOR_ALL_DATASET,
];
