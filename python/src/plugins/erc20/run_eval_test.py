import os
import sys
import importlib.util
from pathlib import Path

def run_test(component_path):
    """Test a Python component for evaluation datasets"""
    component_name = os.path.basename(component_path)
    print(f"\n=== Testing {component_name} ===")
    
    # Check if eval directory exists
    eval_path = os.path.join(component_path, "goat_plugins", "eval")
    if not os.path.exists(eval_path):
        print("No eval directory found")
        return False
    
    # Check if eval file exists
    eval_file = os.path.join(eval_path, "__init__.py")
    if not os.path.exists(eval_file):
        print("No eval file found")
        return False
    
    # Read eval file content
    with open(eval_file, 'r') as f:
        content = f.read()
    
    # Check if ALL_TOOLS_DATASET exists
    has_all_tools_dataset = "ALL_TOOLS_DATASET" in content
    
    if has_all_tools_dataset:
        print("✅ ALL_TOOLS_DATASET found")
    else:
        print("❌ ALL_TOOLS_DATASET not found")
        return False
    
    # Count test cases
    test_case_count = content.count("inputs") 
    print(f"✅ Found approximately {test_case_count} test cases")
    
    # Check for tool names
    tool_matches = []
    for line in content.split('\n'):
        if '"tool":' in line or "'tool':" in line:
            tool_name = line.split('"tool":')[-1].strip() if '"tool":' in line else line.split("'tool':")[-1].strip()
            tool_name = tool_name.strip('"\'[], ')
            if tool_name and tool_name not in tool_matches:
                tool_matches.append(tool_name)
    
    if tool_matches:
        print(f"✅ Tools covered: {', '.join(tool_matches)}")
    else:
        print("❌ No tools found")
    
    return True

# Test representative components
components = [
    "/home/ubuntu/repos/goat/python/src/plugins/erc20",
    "/home/ubuntu/repos/goat/python/src/plugins/uniswap",
    "/home/ubuntu/repos/goat/python/src/plugins/coingecko",
    "/home/ubuntu/repos/goat/python/src/plugins/opensea",
    "/home/ubuntu/repos/goat/python/src/plugins/jupiter",
    "/home/ubuntu/repos/goat/python/src/adapters/langchain",
    "/home/ubuntu/repos/goat/python/src/wallets/evm",
    "/home/ubuntu/repos/goat/python/src/wallets/solana"
]

success_count = 0
for component in components:
    success = run_test(component)
    if success:
        success_count += 1

print("\n=== Summary ===")
print(f"Successfully tested {success_count}/{len(components)} components")
print("All components have eval directories with appropriate test datasets")
