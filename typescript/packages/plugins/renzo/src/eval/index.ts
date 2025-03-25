// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Renzo deposit ERC20 LST tool
 */
export const RENZO_DEPOSIT_ERC20_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Deposit 10 stETH tokens into Renzo",
        },
        referenceOutputs: {
            tool: "deposit_erc20_LST_into_renzo",
            response:
                '{"tokenAddress":"0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84","amountIn":"10000000000000000000","minOut":"9500000000000000000"}',
        },
    },
    {
        inputs: {
            query: "Stake 5 rETH tokens with Renzo",
        },
        referenceOutputs: {
            tool: "deposit_erc20_LST_into_renzo",
            response:
                '{"tokenAddress":"0xae78736Cd615f374D3085123A210448E74Fc6393","amountIn":"5000000000000000000","minOut":"4750000000000000000"}',
        },
    },
];

/**
 * Dataset for testing Renzo deposit ETH tool
 */
export const RENZO_DEPOSIT_ETH_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Deposit 1 ETH into Renzo",
        },
        referenceOutputs: {
            tool: "deposit_eth_into_renzo",
            response: '{"value":"1","minOut":"0.95"}',
        },
    },
    {
        inputs: {
            query: "Stake 0.5 ETH with Renzo",
        },
        referenceOutputs: {
            tool: "deposit_eth_into_renzo",
            response: '{"value":"0.5","minOut":"0.475"}',
        },
    },
];

/**
 * Dataset for testing Renzo check ezETH balance tool
 */
export const RENZO_CHECK_EZETH_BALANCE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my ezETH balance in Renzo?",
        },
        referenceOutputs: {
            tool: "check_ezeth_balance_in_renzo",
            response: '{"address":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Check the ezETH balance for address 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "check_ezeth_balance_in_renzo",
            response: '{"address":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
];

/**
 * Dataset for testing Renzo get deposit address tool
 */
export const RENZO_GET_DEPOSIT_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the Renzo deposit contract address?",
        },
        referenceOutputs: {
            tool: "renzo_get_deposit_address",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Get the address to send ETH to for Renzo staking",
        },
        referenceOutputs: {
            tool: "renzo_get_deposit_address",
            response: "{}",
        },
    },
];

/**
 * Combined dataset for all Renzo tools
 */
export const RENZO_ALL_TOOLS_DATASET: EvalDataset = [
    ...RENZO_DEPOSIT_ERC20_DATASET,
    ...RENZO_DEPOSIT_ETH_DATASET,
    ...RENZO_CHECK_EZETH_BALANCE_DATASET,
    ...RENZO_GET_DEPOSIT_ADDRESS_DATASET,
];
