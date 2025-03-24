// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Polymarket get events tool
 */
export const POLYMARKET_GET_EVENTS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me all events on Polymarket",
        },
        referenceOutputs: {
            tool: "get_polymarket_events",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "What are the current prediction markets on Polymarket?",
        },
        referenceOutputs: {
            tool: "get_polymarket_events",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "List the active events on Polymarket",
        },
        referenceOutputs: {
            tool: "get_polymarket_events",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Polymarket get market info tool
 */
export const POLYMARKET_GET_MARKET_INFO_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Get information about market with ID 123456 on Polymarket",
        },
        referenceOutputs: {
            tool: "get_polymarket_market_info",
            response: '{"marketId":"123456"}',
        },
    },
    {
        inputs: {
            query: "Show me details for Polymarket market 789012",
        },
        referenceOutputs: {
            tool: "get_polymarket_market_info",
            response: '{"marketId":"789012"}',
        },
    },
];

/**
 * Dataset for testing Polymarket create order tool
 */
export const POLYMARKET_CREATE_ORDER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Place a buy order for 10 YES shares on Polymarket market 123456",
        },
        referenceOutputs: {
            tool: "create_order_on_polymarket",
            response: '{"marketId":"123456","outcomeId":"0","side":"buy","size":"10","price":"0.5","leverage":"1"}',
        },
    },
    {
        inputs: {
            query: "Create a sell order for 5 NO shares at price 0.7 on Polymarket market 789012",
        },
        referenceOutputs: {
            tool: "create_order_on_polymarket",
            response: '{"marketId":"789012","outcomeId":"1","side":"sell","size":"5","price":"0.7","leverage":"1"}',
        },
    },
];

/**
 * Dataset for testing Polymarket get active orders tool
 */
export const POLYMARKET_GET_ACTIVE_ORDERS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Show me my active orders on Polymarket",
        },
        referenceOutputs: {
            tool: "get_active_polymarket_orders",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "List all my open orders on Polymarket",
        },
        referenceOutputs: {
            tool: "get_active_polymarket_orders",
            response: "{}",
        },
    },
];

/**
 * Dataset for testing Polymarket cancel order tool
 */
export const POLYMARKET_CANCEL_ORDER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Cancel my order with ID ABC123 on Polymarket",
        },
        referenceOutputs: {
            tool: "cancel_polymarket_order",
            response: '{"orderId":"ABC123"}',
        },
    },
    {
        inputs: {
            query: "Remove my Polymarket order XYZ789",
        },
        referenceOutputs: {
            tool: "cancel_polymarket_order",
            response: '{"orderId":"XYZ789"}',
        },
    },
];

/**
 * Dataset for testing Polymarket cancel all orders tool
 */
export const POLYMARKET_CANCEL_ALL_ORDERS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Cancel all my orders on Polymarket",
        },
        referenceOutputs: {
            tool: "cancel_all_polymarket_orders",
            response: "{}",
        },
    },
    {
        inputs: {
            query: "Remove all my active orders on Polymarket",
        },
        referenceOutputs: {
            tool: "cancel_all_polymarket_orders",
            response: "{}",
        },
    },
];

/**
 * Combined dataset for all Polymarket tools
 */
export const POLYMARKET_ALL_TOOLS_DATASET: EvalDataset = [
    ...POLYMARKET_GET_EVENTS_DATASET,
    ...POLYMARKET_GET_MARKET_INFO_DATASET,
    ...POLYMARKET_CREATE_ORDER_DATASET,
    ...POLYMARKET_GET_ACTIVE_ORDERS_DATASET,
    ...POLYMARKET_CANCEL_ORDER_DATASET,
    ...POLYMARKET_CANCEL_ALL_ORDERS_DATASET,
];
