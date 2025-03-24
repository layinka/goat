// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Crossmint Headless Checkout buy token tool
 */
export const CROSSMINT_BUY_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Buy an NFT with token ID 123 from collection 0xabc123 on Ethereum",
        },
        referenceOutputs: {
            tool: "buy_token",
            response:
                '{"collection":"0xabc123","tokenId":"123","chain":"ethereum","recipient":{"email":"user@example.com"}}',
        },
    },
    {
        inputs: {
            query: "Purchase NFT #456 from the collection 0xdef456 on Solana",
        },
        referenceOutputs: {
            tool: "buy_token",
            response:
                '{"collection":"0xdef456","tokenId":"456","chain":"solana","recipient":{"email":"user@example.com"}}',
        },
    },
    {
        inputs: {
            query: "Buy a token from the marketplace listing with ID 789",
        },
        referenceOutputs: {
            tool: "buy_token",
            response: '{"marketplaceListing":"789","recipient":{"email":"user@example.com"}}',
        },
    },
];

/**
 * Combined dataset for all Crossmint Headless Checkout tools
 */
export const CROSSMINT_HEADLESS_CHECKOUT_ALL_TOOLS_DATASET: EvalDataset = [...CROSSMINT_BUY_TOKEN_DATASET];
