// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Ionic supply asset tool
 */
export const IONIC_SUPPLY_ASSET_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Supply 100 USDC to Ionic Protocol",
        },
        referenceOutputs: {
            tool: "ionic_supply_asset",
            response: '{"asset":"USDC","amount":"100000000"}',
        },
    },
    {
        inputs: {
            query: "Deposit 5 ETH into Ionic",
        },
        referenceOutputs: {
            tool: "ionic_supply_asset",
            response: '{"asset":"ETH","amount":"5000000000000000000"}',
        },
    },
];

/**
 * Dataset for testing Ionic borrow asset tool
 */
export const IONIC_BORROW_ASSET_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Borrow 50 USDC from Ionic Protocol",
        },
        referenceOutputs: {
            tool: "ionic_borrow_asset",
            response: '{"asset":"USDC","amount":"50000000"}',
        },
    },
    {
        inputs: {
            query: "Take out a loan of 1 ETH from Ionic",
        },
        referenceOutputs: {
            tool: "ionic_borrow_asset",
            response: '{"asset":"ETH","amount":"1000000000000000000"}',
        },
    },
];

/**
 * Dataset for testing Ionic get health metrics tool
 */
export const IONIC_GET_HEALTH_METRICS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is my health factor on Ionic Protocol?",
        },
        referenceOutputs: {
            tool: "ionic_get_health_metrics",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Check my Ionic position's LTV and liquidation risk",
        },
        referenceOutputs: {
            tool: "ionic_get_health_metrics",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Ionic loop asset tool
 */
export const IONIC_LOOP_ASSET_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Loop 10 ETH on Ionic Protocol with target LTV of 0.7",
        },
        referenceOutputs: {
            tool: "ionic_loop_asset",
            response: '{"asset":"ETH","initialAmount":"10000000000000000000","targetltv":"0.7"}',
        },
    },
    {
        inputs: {
            query: "Leverage my USDC position on Ionic to 0.5 LTV with initial amount of 1000 USDC and maximum 3 iterations",
        },
        referenceOutputs: {
            tool: "ionic_loop_asset",
            response: '{"asset":"USDC","initialAmount":"1000000000","targetltv":"0.5","maxIterations":3}',
        },
    },
];

/**
 * Dataset for testing Ionic swap collateral tool
 */
export const IONIC_SWAP_COLLATERAL_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Swap 5 ETH collateral for USDC on Ionic Protocol",
        },
        referenceOutputs: {
            tool: "ionic_swap_collateral",
            response: '{"fromAsset":"ETH","toAsset":"USDC","amount":"5000000000000000000"}',
        },
    },
    {
        inputs: {
            query: "Change my Ionic collateral from 1000 USDC to DAI",
        },
        referenceOutputs: {
            tool: "ionic_swap_collateral",
            response: '{"fromAsset":"USDC","toAsset":"DAI","amount":"1000000000"}',
        },
    },
];

/**
 * Combined dataset for all Ionic tools
 */
export const IONIC_ALL_TOOLS_DATASET: EvalDataset = [
    ...IONIC_SUPPLY_ASSET_DATASET,
    ...IONIC_BORROW_ASSET_DATASET,
    ...IONIC_GET_HEALTH_METRICS_DATASET,
    ...IONIC_LOOP_ASSET_DATASET,
    ...IONIC_SWAP_COLLATERAL_DATASET,
];
