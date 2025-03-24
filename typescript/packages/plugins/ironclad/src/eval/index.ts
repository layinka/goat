// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Ironclad loop deposit tool
 */
export const IRONCLAD_LOOP_DEPOSIT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Perform a looped deposit of 1000 USDC on Ironclad with 3 loops and referral code 0",
        },
        referenceOutputs: {
            tool: "loop_deposit_ironclad",
            response:
                '{"assetAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","initialAmount":"1000000000","numLoops":3,"referralCode":0}',
        },
    },
    {
        inputs: {
            query: "Do a recursive borrowing deposit of 5 ETH on Ironclad with 2 loops",
        },
        referenceOutputs: {
            tool: "loop_deposit_ironclad",
            response:
                '{"assetAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","initialAmount":"5000000000000000000","numLoops":2,"referralCode":0}',
        },
    },
];

/**
 * Dataset for testing Ironclad loop withdraw tool
 */
export const IRONCLAD_LOOP_WITHDRAW_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Withdraw my looped USDC position from Ironclad",
        },
        referenceOutputs: {
            tool: "loop_withdraw_ironclad",
            response: '{"assetAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "Unwind my ETH recursive borrowing position on Ironclad",
        },
        referenceOutputs: {
            tool: "loop_withdraw_ironclad",
            response: '{"assetAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
];

/**
 * Dataset for testing Ironclad monitor loop position tool
 */
export const IRONCLAD_MONITOR_LOOP_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check the health of my USDC looped position on Ironclad",
        },
        referenceOutputs: {
            tool: "monitor_loop_position_ironclad",
            response: '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "What is the current LTV and health factor of my ETH position in Ironclad?",
        },
        referenceOutputs: {
            tool: "monitor_loop_position_ironclad",
            response: '{"tokenAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
];

/**
 * Dataset for testing Ironclad borrow iUSD tool
 */
export const IRONCLAD_BORROW_IUSD_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Deposit 1000 USDC as collateral and borrow 500 iUSD on Ironclad",
        },
        referenceOutputs: {
            tool: "borrow_iusd_ironclad",
            response:
                '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenAmount":"1000000000","iUSDAmount":"500000000000000000000"}',
        },
    },
    {
        inputs: {
            query: "Use 2 ETH as collateral to borrow 1000 iUSD from Ironclad",
        },
        referenceOutputs: {
            tool: "borrow_iusd_ironclad",
            response:
                '{"tokenAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenAmount":"2000000000000000000","iUSDAmount":"1000000000000000000000"}',
        },
    },
];

/**
 * Dataset for testing Ironclad repay iUSD tool
 */
export const IRONCLAD_REPAY_IUSD_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Repay all my iUSD debt and close my USDC Trove position on Ironclad",
        },
        referenceOutputs: {
            tool: "repay_iusd_ironclad",
            response: '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "Close my ETH Trove and repay all iUSD on Ironclad",
        },
        referenceOutputs: {
            tool: "repay_iusd_ironclad",
            response: '{"tokenAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
];

/**
 * Dataset for testing Ironclad monitor position tool
 */
export const IRONCLAD_MONITOR_POSITION_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Check the status of my USDC Trove position on Ironclad",
        },
        referenceOutputs: {
            tool: "monitor_position_ironclad",
            response: '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "What is the current collateral and debt of my ETH Trove in Ironclad?",
        },
        referenceOutputs: {
            tool: "monitor_position_ironclad",
            response: '{"tokenAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
];

/**
 * Dataset for testing Ironclad calculate max withdrawable tool
 */
export const IRONCLAD_CALCULATE_MAX_WITHDRAWABLE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Calculate the maximum USDC I can withdraw from Ironclad while maintaining a healthy position",
        },
        referenceOutputs: {
            tool: "calculate_max_withdrawable_ironclad",
            response: '{"assetAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "How much ETH can I safely withdraw from my Ironclad position?",
        },
        referenceOutputs: {
            tool: "calculate_max_withdrawable_ironclad",
            response: '{"assetAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
];

/**
 * Dataset for testing Ironclad get ic vault tool
 */
export const IRONCLAD_GET_IC_VAULT_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the ic-vault address for USDC on Ironclad?",
        },
        referenceOutputs: {
            tool: "get_ic_vault_ironclad",
            response: '{"tokenAddress":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"}',
        },
    },
    {
        inputs: {
            query: "Get the ic-vault address for ETH before approving tokens for deposit",
        },
        referenceOutputs: {
            tool: "get_ic_vault_ironclad",
            response: '{"tokenAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"}',
        },
    },
];

/**
 * Dataset for testing Ironclad get borrower address tool
 */
export const IRONCLAD_GET_BORROWER_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the Borrower contract address on Ironclad?",
        },
        referenceOutputs: {
            tool: "get_borrower_address_ironclad",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Get the Ironclad Borrower address before approving ic-tokens",
        },
        referenceOutputs: {
            tool: "get_borrower_address_ironclad",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Ironclad get lending pool address tool
 */
export const IRONCLAD_GET_LENDING_POOL_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the Lending Pool contract address on Ironclad?",
        },
        referenceOutputs: {
            tool: "get_lending_pool_address_ironclad",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Get the Ironclad Lending Pool address before approving tokens for looped deposit",
        },
        referenceOutputs: {
            tool: "get_lending_pool_address_ironclad",
            response: "{}",
        },
    },
];

/**
 * Combined dataset for all Ironclad tools
 */
export const IRONCLAD_ALL_TOOLS_DATASET: EvalDataset = [
    ...IRONCLAD_LOOP_DEPOSIT_DATASET,
    ...IRONCLAD_LOOP_WITHDRAW_DATASET,
    ...IRONCLAD_MONITOR_LOOP_POSITION_DATASET,
    ...IRONCLAD_BORROW_IUSD_DATASET,
    ...IRONCLAD_REPAY_IUSD_DATASET,
    ...IRONCLAD_MONITOR_POSITION_DATASET,
    ...IRONCLAD_CALCULATE_MAX_WITHDRAWABLE_DATASET,
    ...IRONCLAD_GET_IC_VAULT_DATASET,
    ...IRONCLAD_GET_BORROWER_ADDRESS_DATASET,
    ...IRONCLAD_GET_LENDING_POOL_ADDRESS_DATASET,
];
