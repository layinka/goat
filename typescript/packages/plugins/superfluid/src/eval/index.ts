// Define the EvalDataset type locally since it's not exported from core
type EvalDataset = {
    inputs: { query: string };
    referenceOutputs: { tool: string; response: string };
}[];

/**
 * Dataset for testing Superfluid flow tool
 */
export const SUPERFLUID_FLOW_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Create a flow of 100 DAIx tokens from me to 0x1234567890123456789012345678901234567890",
        },
        referenceOutputs: {
            tool: "create_or_update_or_delete_flow",
            response:
                '{"token":"0x1234567890123456789012345678901234567890","receiver":"0x1234567890123456789012345678901234567890","flowrate":"100"}',
        },
    },
    {
        inputs: {
            query: "Update my token stream to send 50 USDCx per month to 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "create_or_update_or_delete_flow",
            response:
                '{"token":"0xabcdef1234567890abcdef1234567890abcdef12","receiver":"0xabcdef1234567890abcdef1234567890abcdef12","flowrate":"50"}',
        },
    },
    {
        inputs: {
            query: "Stop my flow of ETHx to 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "create_or_update_or_delete_flow",
            response:
                '{"token":"0x9876543210987654321098765432109876543210","receiver":"0x9876543210987654321098765432109876543210","flowrate":"0"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get flow rate tool
 */
export const SUPERFLUID_GET_FLOW_RATE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the flow rate of DAIx from 0x1234567890123456789012345678901234567890 to 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_flow_rate",
            response:
                '{"token":"0x1234567890123456789012345678901234567890","sender":"0x1234567890123456789012345678901234567890","receiver":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Check the streaming rate of USDCx between 0x9876543210987654321098765432109876543210 and 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_flow_rate",
            response:
                '{"token":"0x9876543210987654321098765432109876543210","sender":"0x9876543210987654321098765432109876543210","receiver":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid update member units tool
 */
export const SUPERFLUID_UPDATE_MEMBER_UNITS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Update member 0x1234567890123456789012345678901234567890 to have 100 units in pool 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        referenceOutputs: {
            tool: "update_member_units",
            response:
                '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890","newUnits":"100"}',
        },
    },
    {
        inputs: {
            query: "Change the units for 0x9876543210987654321098765432109876543210 to 50 in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "update_member_units",
            response:
                '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210","newUnits":"50"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get units tool
 */
export const SUPERFLUID_GET_UNITS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "How many units does member 0x1234567890123456789012345678901234567890 have in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_member_units",
            response:
                '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Check the units for 0x9876543210987654321098765432109876543210 in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_member_units",
            response:
                '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get member flow rate tool
 */
export const SUPERFLUID_GET_MEMBER_FLOW_RATE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the flow rate for member 0x1234567890123456789012345678901234567890 in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_member_flow_rate",
            response:
                '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Check the streaming rate for 0x9876543210987654321098765432109876543210 in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_member_flow_rate",
            response:
                '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get total flow rate tool
 */
export const SUPERFLUID_GET_TOTAL_FLOW_RATE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the total flow rate for pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_total_flow_rate",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Check the total streaming rate for Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_total_flow_rate",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid is member connected tool
 */
export const SUPERFLUID_IS_MEMBER_CONNECTED_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Is member 0x1234567890123456789012345678901234567890 connected to the pool?",
        },
        referenceOutputs: {
            tool: "is_member_connected",
            response: '{"memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Check if 0x9876543210987654321098765432109876543210 is connected to the Superfluid pool",
        },
        referenceOutputs: {
            tool: "is_member_connected",
            response: '{"memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get net flow tool
 */
export const SUPERFLUID_GET_NET_FLOW_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the net flow of DAIx for 0x1234567890123456789012345678901234567890?",
        },
        referenceOutputs: {
            tool: "get_net_flow",
            response:
                '{"token":"0x1234567890123456789012345678901234567890","memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Check the net streaming rate of USDCx for 0x9876543210987654321098765432109876543210",
        },
        referenceOutputs: {
            tool: "get_net_flow",
            response:
                '{"token":"0x9876543210987654321098765432109876543210","memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
];

/**
 * Dataset for testing Superfluid transferability for units owner tool
 */
export const SUPERFLUID_TRANSFERABILITY_FOR_UNITS_OWNER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Can pool members transfer their units in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "transferability_for_units_owner",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Check if units are transferable by members in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "transferability_for_units_owner",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid distribution from any address tool
 */
export const SUPERFLUID_DISTRIBUTION_FROM_ANY_ADDRESS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Can any address distribute via pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "distribution_from_any_address",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Check if non-admin addresses can distribute through Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "distribution_from_any_address",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid admin tool
 */
export const SUPERFLUID_ADMIN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "Who is the admin of pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "admin",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Get the administrator address for Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "admin",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid super token tool
 */
export const SUPERFLUID_SUPER_TOKEN_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the SuperToken for pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "super_token",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Get the token used by Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "super_token",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get total units tool
 */
export const SUPERFLUID_GET_TOTAL_UNITS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What are the total units in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_total_units",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Get the sum of all units in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_total_units",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get total connected units tool
 */
export const SUPERFLUID_GET_TOTAL_CONNECTED_UNITS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What are the total connected units in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_total_connected_units",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Get the sum of units for connected members in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_total_connected_units",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get total disconnected units tool
 */
export const SUPERFLUID_GET_TOTAL_DISCONNECTED_UNITS_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What are the total disconnected units in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_total_disconnected_units",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Get the sum of units for disconnected members in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_total_disconnected_units",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get total connected flow rate tool
 */
export const SUPERFLUID_GET_TOTAL_CONNECTED_FLOW_RATE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the total connected flow rate in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_total_connected_flow_rate",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Get the combined streaming rate for connected members in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_total_connected_flow_rate",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get total disconnected flow rate tool
 */
export const SUPERFLUID_GET_TOTAL_DISCONNECTED_FLOW_RATE_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the total disconnected flow rate in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_total_disconnected_flow_rate",
            response: '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        inputs: {
            query: "Get the combined streaming rate for disconnected members in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_total_disconnected_flow_rate",
            response: '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get total amount received by member tool
 */
export const SUPERFLUID_GET_TOTAL_AMOUNT_RECEIVED_BY_MEMBER_DATASET: EvalDataset = [
    {
        inputs: {
            query: "How much has member 0x1234567890123456789012345678901234567890 received in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_total_amount_received_by_member",
            response:
                '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "Get the total amount received by 0x9876543210987654321098765432109876543210 in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        referenceOutputs: {
            tool: "get_total_amount_received_by_member",
            response:
                '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
];

/**
 * Dataset for testing Superfluid get claimable now tool
 */
export const SUPERFLUID_GET_CLAIMABLE_NOW_DATASET: EvalDataset = [
    {
        inputs: {
            query: "What is the claimable balance for member 0x1234567890123456789012345678901234567890 in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        referenceOutputs: {
            tool: "get_claimable_now",
            response:
                '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        inputs: {
            query: "How much can 0x9876543210987654321098765432109876543210 claim right now from Superfluid pool 0x5555555555555555555555555555555555555555?",
        },
        referenceOutputs: {
            tool: "get_claimable_now",
            response:
                '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
];

/**
 * Combined dataset for all Superfluid tools
 */
export const SUPERFLUID_ALL_TOOLS_DATASET: EvalDataset = [
    ...SUPERFLUID_FLOW_DATASET,
    ...SUPERFLUID_GET_FLOW_RATE_DATASET,
    ...SUPERFLUID_UPDATE_MEMBER_UNITS_DATASET,
    ...SUPERFLUID_GET_UNITS_DATASET,
    ...SUPERFLUID_GET_MEMBER_FLOW_RATE_DATASET,
    ...SUPERFLUID_GET_TOTAL_FLOW_RATE_DATASET,
    ...SUPERFLUID_IS_MEMBER_CONNECTED_DATASET,
    ...SUPERFLUID_GET_NET_FLOW_DATASET,
    ...SUPERFLUID_TRANSFERABILITY_FOR_UNITS_OWNER_DATASET,
    ...SUPERFLUID_DISTRIBUTION_FROM_ANY_ADDRESS_DATASET,
    ...SUPERFLUID_ADMIN_DATASET,
    ...SUPERFLUID_SUPER_TOKEN_DATASET,
    ...SUPERFLUID_GET_TOTAL_UNITS_DATASET,
    ...SUPERFLUID_GET_TOTAL_CONNECTED_UNITS_DATASET,
    ...SUPERFLUID_GET_TOTAL_DISCONNECTED_UNITS_DATASET,
    ...SUPERFLUID_GET_TOTAL_CONNECTED_FLOW_RATE_DATASET,
    ...SUPERFLUID_GET_TOTAL_DISCONNECTED_FLOW_RATE_DATASET,
    ...SUPERFLUID_GET_TOTAL_AMOUNT_RECEIVED_BY_MEMBER_DATASET,
    ...SUPERFLUID_GET_CLAIMABLE_NOW_DATASET,
];
