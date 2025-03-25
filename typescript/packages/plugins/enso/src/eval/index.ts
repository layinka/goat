// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Enso route tool
 */
export const ENSO_ROUTE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 1 ETH for USDC using Enso",
        },
        referenceOutputs: {
            tool: "enso_route",
            response:
                '{"tokenIn":"0x0000000000000000000000000000000000000000","tokenOut":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","amountIn":"1"}',
        },
    },
    {
        inputs: {
            query: "Exchange 500 USDC for DAI through Enso",
        },
        referenceOutputs: {
            tool: "enso_route",
            response:
                '{"tokenIn":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","tokenOut":"0x6B175474E89094C44Da98b954EedeAC495271d0F","amountIn":"500"}',
        },
    },
    {
        inputs: {
            query: "Use Enso to trade 0.5 WETH for LINK",
        },
        referenceOutputs: {
            tool: "enso_route",
            response:
                '{"tokenIn":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","tokenOut":"0x514910771AF9Ca656af840dff83E8264EcF986CA","amountIn":"0.5"}',
        },
    },
];

/**
 * Combined dataset for all Enso tools
 */
export const ENSO_ALL_TOOLS_DATASET: EvalDataset = [...ENSO_ROUTE_DATASET];
