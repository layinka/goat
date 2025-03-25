import os
from pathlib import Path

# Component types to generate scripts for
component_types = ["plugins", "adapters", "wallets"]

# Template for test_eval.py
def test_eval_template(component_type, component_name):
    return f'''import os
import asyncio
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

from goat.evals.utils.run_evals import run_evals
# TODO: Import appropriate wallet client and plugins
from goat_{component_type}.{component_name}.eval import ALL_TOOLS_DATASET

# Load environment variables
load_dotenv()

# TODO: Setup wallet appropriate for this component

# Setup LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3
)

async def run_test():
    try:
        # TODO: Create plugin appropriate for this component
        
        # Run evaluations
        result = await run_evals(
            dataset=ALL_TOOLS_DATASET,
            wallet=None,  # TODO: Add appropriate wallet
            plugins=[],  # TODO: Add appropriate plugins
            llm=llm,
            test_name="{component_name.capitalize()} Evaluation Tests"
        )

        print("\\nEvaluation Summary:")
        print(f"Success: {{result.success}}")
        print(f"Total: {{len(result.results)}}")
        print(f"Passed: {{sum(1 for r in result.results if r.passed)}}")
        print(f"Failed: {{sum(1 for r in result.results if not r.passed)}}")
    except Exception as e:
        print(f"Error running evaluations: {{e}}")

if __name__ == "__main__":
    asyncio.run(run_test())
'''

# Generate scripts for all components
for component_type in component_types:
    components_path = Path("src") / component_type
    components = [d for d in components_path.iterdir() if d.is_dir()]
    
    for component in components:
        eval_dir_path = component / f"goat_{component_type[:-1]}s" / "eval"
        test_file_path = component / "test_eval.py"
        
        # Only generate if eval directory exists but test file doesn't
        if eval_dir_path.exists() and not test_file_path.exists():
            print(f"Generating test script for {component_type}/{component.name}")
            with open(test_file_path, 'w') as f:
                f.write(test_eval_template(component_type[:-1], component.name))

print("Script generation completed")
