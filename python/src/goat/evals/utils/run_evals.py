import json
from typing import Any, Dict, List, Optional, TypeVar, Union, Callable

from goat import ToolBase, WalletClientBase, get_tools

# Type variables
T = TypeVar('T', bound=WalletClientBase)

class EvalResult:
    """Result of a single evaluation case"""
    def __init__(
        self,
        query: str,
        passed: bool,
        details: Dict[str, Any]
    ):
        self.query = query
        self.passed = passed
        self.details = details

class EvalResults:
    """Results of running the evaluation"""
    def __init__(
        self,
        success: bool,
        results: List[EvalResult]
    ):
        self.success = success
        self.results = results

def deep_compare(reference_args: Any, actual_args: Any) -> bool:
    """Deep comparison of objects"""
    if (not isinstance(reference_args, dict) or 
        not isinstance(actual_args, dict) or
        reference_args is None or 
        actual_args is None):
        return reference_args == actual_args

    reference_keys = list(reference_args.keys())
    actual_keys = list(actual_args.keys())

    # Ensure all reference keys are present in actual arguments
    if not all(key in actual_keys for key in reference_keys):
        return False

    # Only compare keys from reference (all mandatory) since the LLM may return optional parameters
    return all(deep_compare(reference_args[key], actual_args[key]) for key in reference_keys)

def compare_parameters(
    reference_output: Dict[str, str],
    actual_output: Dict[str, Optional[str]]
) -> bool:
    """Compare tool parameters"""
    reference_response = reference_output.get('response')
    actual_response = actual_output.get('response')
    
    if not reference_response or not actual_response:
        return False

    # Responses can be json strings (parameter object) or simple strings
    try:
        if reference_response.startswith('{'):
            parsed_reference_response = json.loads(reference_response)
        else:
            parsed_reference_response = reference_response
    except (json.JSONDecodeError, TypeError):
        parsed_reference_response = reference_response

    try:
        if actual_response.startswith('{'):
            parsed_actual_response = json.loads(actual_response) 
        else:
            parsed_actual_response = actual_response
    except (json.JSONDecodeError, TypeError):
        parsed_actual_response = actual_response

    return deep_compare(parsed_reference_response, parsed_actual_response)

def compare_tool_names(
    reference_output: Dict[str, str],
    actual_output: Dict[str, Optional[str]]
) -> bool:
    """Compare tool names"""
    return actual_output.get('tool') == reference_output.get('tool')

async def run_evals(
    dataset: List[Dict[str, Union[Dict[str, str], Dict[str, Any]]]],
    wallet: WalletClientBase,
    plugins: List[Any],
    llm: Any,  # LLM instance that will process the prompts
    test_name: str
) -> EvalResults:
    """
    Run evaluations on a dataset using the provided wallet, plugins and LLM.
    
    Args:
        dataset: List of test cases with inputs and reference outputs
        wallet: Wallet client instance
        plugins: List of plugin instances
        llm: LLM instance for processing prompts
        test_name: Name of the test suite
        
    Returns:
        EvalResults: Results of the evaluation
    """
    tools = get_tools(wallet=wallet, plugins=plugins)
    
    results = []
    all_passed = True
    
    for test_case in dataset:
        try:
            # Process query with LLM using the tools
            result = await llm.invoke(
                messages=[{"role": "user", "content": test_case['inputs']['query']}],
                tools=[
                    {
                        "type": "function",
                        "function": {
                            "name": tool.name,
                            "description": tool.description,
                            "parameters": tool.parameters
                        }
                    }
                    for tool in tools
                ]
            )
            
            # Extract tool call from LLM response
            tool_call = result.tool_calls[0] if result.tool_calls else None
            
            if not tool_call:
                print(f"No tool call found for query: {test_case['inputs']['query']}")
                results.append(EvalResult(
                    query=test_case['inputs']['query'],
                    passed=False,
                    details={"error": "No tool call found"}
                ))
                all_passed = False
                continue
            
            # Compare the tool call against the reference
            actual_output = {
                "tool": tool_call.name,
                "response": (
                    json.dumps(tool_call.args) 
                    if isinstance(tool_call.args, dict) 
                    else tool_call.args
                )
            }
            
            tool_name_correct = compare_tool_names(test_case['referenceOutputs'], actual_output)
            parameters_correct = compare_parameters(test_case['referenceOutputs'], actual_output)
            passed = tool_name_correct and parameters_correct
            
            results.append(EvalResult(
                query=test_case['inputs']['query'],
                passed=passed,
                details={
                    "expected": test_case['referenceOutputs'],
                    "actual": actual_output,
                    "tool_name_correct": tool_name_correct,
                    "parameters_correct": parameters_correct
                }
            ))
            
            if not passed:
                all_passed = False
            
            print(
                f"{'🟢' if passed else '🔴'} Test \"{test_case['inputs']['query']}\": "
                f"{'PASSED' if passed else 'FAILED'}"
            )
        except Exception as e:
            print(f"Error evaluating query: {test_case['inputs']['query']}", e)
            results.append(EvalResult(
                query=test_case['inputs']['query'],
                passed=False,
                details={"error": str(e)}
            ))
            all_passed = False
    
    print(f"\n{test_name} results: {'🟢 ALL PASSED' if all_passed else '🔴 SOME FAILED'}")
    
    return EvalResults(
        success=all_passed,
        results=results
    )
