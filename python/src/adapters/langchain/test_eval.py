import os
import asyncio
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from web3 import Web3

from goat.evals.utils.run_evals import run_evals
from goat_wallets.web3 import Web3WalletClient
from goat_adapters.langchain import LangchainAdapter
from goat_adapters.langchain.eval import ALL_TOOLS_DATASET

# Load environment variables
load_dotenv()

# Setup Web3 wallet
w3 = Web3(Web3.HTTPProvider(os.environ.get("RPC_PROVIDER_URL")))
wallet = Web3WalletClient(
    w3=w3,
    private_key=os.environ.get("WALLET_PRIVATE_KEY")
)

# Setup LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3
)

async def run_test():
    try:
        # Create adapter
        langchain_adapter = LangchainAdapter()
        
        # Run evaluations
        result = await run_evals(
            dataset=ALL_TOOLS_DATASET,
            wallet=wallet,
            plugins=[],
            llm=llm,
            test_name="LangChain Adapter Evaluation Tests"
        )

        print("\nEvaluation Summary:")
        print(f"Success: {result.success}")
        print(f"Total: {len(result.results)}")
        print(f"Passed: {sum(1 for r in result.results if r.passed)}")
        print(f"Failed: {sum(1 for r in result.results if not r.passed)}")
    except Exception as e:
        print(f"Error running evaluations: {e}")

if __name__ == "__main__":
    asyncio.run(run_test())
