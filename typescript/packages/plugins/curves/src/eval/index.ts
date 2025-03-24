// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Curves buy token tool
 */
export const CURVES_BUY_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Buy 2 curves tokens for subject 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "buy_curves_token",
            response: '{"subject":"0x1234567890123456789012345678901234567890","amount":2}',
        },
    },
    {
        inputs: {
            query: "Purchase a curves token for 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "buy_curves_token",
            response: '{"subject":"0xabcdef1234567890abcdef1234567890abcdef12","amount":1}',
        },
    },
];

/**
 * Dataset for testing Curves get buy price tool
 */
export const CURVES_GET_BUY_PRICE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What's the price to buy 3 curves tokens for subject 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "get_buy_curves_token",
            response: '{"subject":"0x1234567890123456789012345678901234567890","amount":3,"unit":"eth"}',
        },
    },
    {
        inputs: {
            query: "How much would it cost in wei to buy a curves token for 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_buy_curves_token",
            response: '{"subject":"0xabcdef1234567890abcdef1234567890abcdef12","amount":1,"unit":"wei"}',
        },
    },
];

/**
 * Dataset for testing Curves sell token tool
 */
export const CURVES_SELL_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Sell 2 curves tokens for subject 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "sell_curves_token",
            response: '{"subject":"0x1234567890123456789012345678901234567890","amount":2}',
        },
    },
    {
        inputs: {
            query: "Sell my curves token for 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "sell_curves_token",
            response: '{"subject":"0xabcdef1234567890abcdef1234567890abcdef12","amount":1}',
        },
    },
];

/**
 * Dataset for testing Curves get sell price tool
 */
export const CURVES_GET_SELL_PRICE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What's the price I'll get for selling 3 curves tokens for subject 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "get_sell_curves_token",
            response: '{"subject":"0x1234567890123456789012345678901234567890","amount":3,"unit":"eth"}',
        },
    },
    {
        inputs: {
            query: "How much would I get in gwei for selling a curves token for 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_sell_curves_token",
            response: '{"subject":"0xabcdef1234567890abcdef1234567890abcdef12","amount":1,"unit":"gwei"}',
        },
    },
];

/**
 * Dataset for testing Curves get ERC20 info tool
 */
export const CURVES_GET_ERC20_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get the ERC20 token information for subject 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "get_curves_erc20",
            response: '{"subject":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Show me my ERC20 token details on Curves",
        },
        referenceOutputs: {
            tool: "get_curves_erc20",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Curves get balance tool
 */
export const CURVES_GET_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What's my balance of curves tokens for subject 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "get_curves_balance",
            response: '{"subject":"0x1234567890123456789012345678901234567890"}',
        },
    },
];

/**
 * Dataset for testing Curves withdraw tool
 */
export const CURVES_WITHDRAW_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Withdraw 2 curves tokens to ERC20 for subject 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "withdraw_curves",
            response: '{"subject":"0x1234567890123456789012345678901234567890","amount":2}',
        },
    },
    {
        inputs: {
            query: "Convert my curves token to ERC20 for 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "withdraw_curves",
            response: '{"subject":"0xabcdef1234567890abcdef1234567890abcdef12","amount":1}',
        },
    },
];

/**
 * Dataset for testing Curves deposit tool
 */
export const CURVES_DEPOSIT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Deposit 2.5 ERC20 tokens to curves for subject 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "deposit_curves",
            response: '{"subject":"0x1234567890123456789012345678901234567890","amount":"2.5"}',
        },
    },
    {
        inputs: {
            query: "Convert my ERC20 token to curves for 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "deposit_curves",
            response: '{"subject":"0xabcdef1234567890abcdef1234567890abcdef12","amount":"1"}',
        },
    },
];

/**
 * Dataset for testing Curves mint ERC20 tool
 */
export const CURVES_MINT_ERC20_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Mint a new ERC20 token with name 'My Token' and symbol 'MTK'",
        },
        referenceOutputs: {
            tool: "mint_curves_erc20",
            response: '{"name":"My Token","symbol":"MTK"}',
        },
    },
    {
        inputs: {
            query: "Create an ERC20 token called 'Test Token' with symbol 'TEST'",
        },
        referenceOutputs: {
            tool: "mint_curves_erc20",
            response: '{"name":"Test Token","symbol":"TEST"}',
        },
    },
];

/**
 * Combined dataset for all Curves tools
 */
export const CURVES_ALL_TOOLS_DATASET: EvalDataset = [
    ...CURVES_BUY_TOKEN_DATASET,
    ...CURVES_GET_BUY_PRICE_DATASET,
    ...CURVES_SELL_TOKEN_DATASET,
    ...CURVES_GET_SELL_PRICE_DATASET,
    ...CURVES_GET_ERC20_DATASET,
    ...CURVES_GET_BALANCE_DATASET,
    ...CURVES_WITHDRAW_DATASET,
    ...CURVES_DEPOSIT_DATASET,
    ...CURVES_MINT_ERC20_DATASET,
];
