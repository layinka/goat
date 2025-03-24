// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing ERC20 token information tool
 */
export const ERC20_INFO_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the symbol for USDC?",
        },
        referenceOutputs: {
            tool: "erc20_getTokenInfoBySymbol",
            response: '{"symbol":"USDC"}',
        },
    },
    {
        inputs: {
            query: "Tell me about the USDC token contract",
        },
        referenceOutputs: {
            tool: "erc20_getTokenInfoBySymbol",
            response: '{"symbol":"USDC"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token balance tool
 */
export const ERC20_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What's my balance of USDC?",
        },
        referenceOutputs: {
            tool: "erc20_getTokenBalance",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","wallet":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "How much USDC do I have?",
        },
        referenceOutputs: {
            tool: "erc20_getTokenBalance",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","wallet":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token transfer tool
 */
export const ERC20_TRANSFER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Send 100 USDC to 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "erc20_transfer",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","to":"0x1234567890123456789012345678901234567890","amount":"100000000"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token total supply tool
 */
export const ERC20_TOTAL_SUPPLY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the total supply of USDC?",
        },
        referenceOutputs: {
            tool: "erc20_getTokenTotalSupply",
            response: '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token allowance tool
 */
export const ERC20_ALLOWANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my allowance for USDC to 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "erc20_getTokenAllowance",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","owner":"0x0987654321098765432109876543210987654321","spender":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token approve tool
 */
export const ERC20_APPROVE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Approve 1000 USDC for 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "erc20_approve",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","spender":"0x1234567890123456789012345678901234567890","amount":"1000000000"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token revoke approval tool
 */
export const ERC20_REVOKE_APPROVAL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Revoke approval for USDC to 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "erc20_revokeApproval",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","spender":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token transfer from tool
 */
export const ERC20_TRANSFER_FROM_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Transfer 50 USDC from 0x0987654321098765432109876543210987654321 to 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "erc20_transferFrom",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","from":"0x0987654321098765432109876543210987654321","to":"0x1234567890123456789012345678901234567890","amount":"50000000"}',
        },
    },
];

/**
 * Dataset for testing ERC20 token convert to base unit tool
 */
export const ERC20_CONVERT_TO_BASE_UNIT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Convert 10 USDC to base units",
        },
        referenceOutputs: {
            tool: "erc20_convertToBaseUnit",
            response: '{"amount":10,"decimals":6}',
        },
    },
];

/**
 * Dataset for testing ERC20 token convert from base unit tool
 */
export const ERC20_CONVERT_FROM_BASE_UNIT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Convert 10000000 USDC base units to decimal",
        },
        referenceOutputs: {
            tool: "erc20_convertFromBaseUnit",
            response: '{"amount":10000000,"decimals":6}',
        },
    },
];

/**
 * Combined dataset for all ERC20 tools
 */
export const ERC20_ALL_TOOLS_DATASET: EvalDataset = [
    ...ERC20_INFO_DATASET,
    ...ERC20_BALANCE_DATASET,
    ...ERC20_TRANSFER_DATASET,
    ...ERC20_TOTAL_SUPPLY_DATASET,
    ...ERC20_ALLOWANCE_DATASET,
    ...ERC20_APPROVE_DATASET,
    ...ERC20_REVOKE_APPROVAL_DATASET,
    ...ERC20_TRANSFER_FROM_DATASET,
    ...ERC20_CONVERT_TO_BASE_UNIT_DATASET,
    ...ERC20_CONVERT_FROM_BASE_UNIT_DATASET,
];
