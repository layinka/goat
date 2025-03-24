// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Balancer swap tool
 */
export const BALANCER_SWAP_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 0.1 ETH for USDC on Balancer",
        },
        referenceOutputs: {
            tool: "swap_on_balancer",
            response:
                '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amountIn":"100000000000000000","tokenInDecimals":18,"tokenOutDecimals":6,"slippage":0.5}',
        },
    },
    {
        inputs: {
            query: "Exchange 500 USDC for DAI on Balancer with 1% slippage",
        },
        referenceOutputs: {
            tool: "swap_on_balancer",
            response:
                '{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0x6B175474E89094C44Da98b954EedeAC495271d0F","amountIn":"500000","tokenInDecimals":6,"tokenOutDecimals":18,"slippage":1}',
        },
    },
];

/**
 * Dataset for testing Balancer add liquidity tool
 */
export const BALANCER_ADD_LIQUIDITY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Add liquidity to Balancer pool 0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014 with 0.1 ETH and 100 USDC",
        },
        referenceOutputs: {
            tool: "add_liquidity_to_balancer",
            response:
                '{"pool":"0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014","amounts":[{"token":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","amount":"100000000000000000","decimals":18},{"token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amount":"100000000","decimals":6}],"slippage":0.5}',
        },
    },
];

/**
 * Dataset for testing Balancer remove liquidity tool
 */
export const BALANCER_REMOVE_LIQUIDITY_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Remove 10 BPT from Balancer pool 0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014",
        },
        referenceOutputs: {
            tool: "remove_liquidity_from_balancer",
            response:
                '{"pool":"0x5c6ee304399dbdb9c8ef030ab642b10820db8f56000200000000000000000014","bptAmountIn":"10000000000000000000","slippage":0.5}',
        },
    },
];

/**
 * Combined dataset for all Balancer tools
 */
export const BALANCER_ALL_TOOLS_DATASET: EvalDataset = [
    ...BALANCER_SWAP_DATASET,
    ...BALANCER_ADD_LIQUIDITY_DATASET,
    ...BALANCER_REMOVE_LIQUIDITY_DATASET,
];
