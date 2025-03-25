import os
import subprocess
import sys
from pathlib import Path

# Component types to test
component_types = ["plugins", "adapters", "wallets"]

def run_tests_for_component_type(component_type):
    """Run tests for a specific component type"""
    print(f"\n=== Running tests for {component_type} ===\n")
    
    components_path = Path("src") / component_type
    components = [d for d in components_path.iterdir() if d.is_dir()]
    
    for component in components:
        test_file_path = component / "test_eval.py"
        
        if test_file_path.exists():
            print(f"Testing {component.name}...")
            try:
                subprocess.run([sys.executable, str(test_file_path)], 
                              check=True, 
                              capture_output=False)
                print(f"✅ {component.name} tests completed successfully\n")
            except subprocess.CalledProcessError as e:
                print(f"❌ {component.name} tests failed: {e}\n")
        else:
            print(f"⚠️ {component.name} does not have a test file\n")

# Run tests for all component types
for component_type in component_types:
    run_tests_for_component_type(component_type)

print("\n=== All evaluation tests completed ===\n")
