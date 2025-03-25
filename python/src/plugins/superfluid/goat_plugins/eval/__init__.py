# Dataset for testing Superfluid flow tool
SUPERFLUID_FLOW_DATASET = [
    {
        "inputs": {
            "query": "Create a flow of 100 DAIx tokens per month to address 0x1234567890123456789012345678901234567890",
        },
        "referenceOutputs": {
            "tool": "create_or_update_or_delete_flow",
            "response": '{"token":"0x1234567890123456789012345678901234567890","receiver":"0x1234567890123456789012345678901234567890","flowrate":"3858024691358"}',
        },
    },
    {
        "inputs": {
            "query": "Update my USDCx stream to 0xabcdef1234567890abcdef1234567890abcdef12 to 200 tokens per month",
        },
        "referenceOutputs": {
            "tool": "create_or_update_or_delete_flow",
            "response": '{"token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","receiver":"0xabcdef1234567890abcdef1234567890abcdef12","flowrate":"7716049382716"}',
        },
    },
    {
        "inputs": {
            "query": "Stop my flow of ETHx to 0x9876543210987654321098765432109876543210",
        },
        "referenceOutputs": {
            "tool": "create_or_update_or_delete_flow",
            "response": '{"token":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","receiver":"0x9876543210987654321098765432109876543210","flowrate":"0"}',
        },
    },
]

# Dataset for testing Superfluid get flowrate tool
SUPERFLUID_GET_FLOWRATE_DATASET = [
    {
        "inputs": {
            "query": "What is the current flow rate of DAIx from my address to 0x1234567890123456789012345678901234567890?",
        },
        "referenceOutputs": {
            "tool": "get_flow_rate",
            "response": '{"token":"0x1234567890123456789012345678901234567890","sender":"0x1234567890123456789012345678901234567890","receiver":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        "inputs": {
            "query": "Check the USDCx stream rate between 0xabcdef1234567890abcdef1234567890abcdef12 and 0x9876543210987654321098765432109876543210",
        },
        "referenceOutputs": {
            "tool": "get_flow_rate",
            "response": '{"token":"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48","sender":"0xabcdef1234567890abcdef1234567890abcdef12","receiver":"0x9876543210987654321098765432109876543210"}',
        },
    },
]

# Dataset for testing Superfluid update member units tool
SUPERFLUID_UPDATE_MEMBER_UNITS_DATASET = [
    {
        "inputs": {
            "query": "Update member 0x1234567890123456789012345678901234567890 to have 100 units in pool 0xabcdef1234567890abcdef1234567890abcdef12",
        },
        "referenceOutputs": {
            "tool": "update_member_units",
            "response": '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890","newUnits":"100"}',
        },
    },
    {
        "inputs": {
            "query": "Set 500 units for address 0x9876543210987654321098765432109876543210 in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        "referenceOutputs": {
            "tool": "update_member_units",
            "response": '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210","newUnits":"500"}',
        },
    },
]

# Dataset for testing Superfluid get units tool
SUPERFLUID_GET_UNITS_DATASET = [
    {
        "inputs": {
            "query": "How many units does member 0x1234567890123456789012345678901234567890 have in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        "referenceOutputs": {
            "tool": "get_member_units",
            "response": '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        "inputs": {
            "query": "Check the units for address 0x9876543210987654321098765432109876543210 in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        "referenceOutputs": {
            "tool": "get_member_units",
            "response": '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
]

# Dataset for testing Superfluid get member flow rate tool
SUPERFLUID_GET_MEMBER_FLOW_RATE_DATASET = [
    {
        "inputs": {
            "query": "What is the flow rate for member 0x1234567890123456789012345678901234567890 in pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        "referenceOutputs": {
            "tool": "get_member_flow_rate",
            "response": '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12","memberAddr":"0x1234567890123456789012345678901234567890"}',
        },
    },
    {
        "inputs": {
            "query": "Check the flow rate for address 0x9876543210987654321098765432109876543210 in Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        "referenceOutputs": {
            "tool": "get_member_flow_rate",
            "response": '{"poolAddress":"0x5555555555555555555555555555555555555555","memberAddr":"0x9876543210987654321098765432109876543210"}',
        },
    },
]

# Dataset for testing Superfluid get total flow rate tool
SUPERFLUID_GET_TOTAL_FLOW_RATE_DATASET = [
    {
        "inputs": {
            "query": "What is the total flow rate for pool 0xabcdef1234567890abcdef1234567890abcdef12?",
        },
        "referenceOutputs": {
            "tool": "get_total_flow_rate",
            "response": '{"poolAddress":"0xabcdef1234567890abcdef1234567890abcdef12"}',
        },
    },
    {
        "inputs": {
            "query": "Check the total flow rate for Superfluid pool 0x5555555555555555555555555555555555555555",
        },
        "referenceOutputs": {
            "tool": "get_total_flow_rate",
            "response": '{"poolAddress":"0x5555555555555555555555555555555555555555"}',
        },
    },
]

# Combined dataset for all Superfluid tools
SUPERFLUID_ALL_TOOLS_DATASET = (
    SUPERFLUID_FLOW_DATASET +
    SUPERFLUID_GET_FLOWRATE_DATASET +
    SUPERFLUID_UPDATE_MEMBER_UNITS_DATASET +
    SUPERFLUID_GET_UNITS_DATASET +
    SUPERFLUID_GET_MEMBER_FLOW_RATE_DATASET +
    SUPERFLUID_GET_TOTAL_FLOW_RATE_DATASET
)
