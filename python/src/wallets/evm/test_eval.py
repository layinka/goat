import os
import asyncio
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI

from goat.evals.utils.run_evals import run_evals
from goat_wallets.evm import EVMWalletClient
from goat_wallets.evm.eval import ALL_TOOLS_DATASET

# Load environment variables
load_dotenv()

# Setup EVM wallet
wallet = EVMWalletClient(
    private_key=os.environ.get("WALLET_PRIVATE_KEY"),
    rpc_url=os.environ.get("RPC_PROVIDER_URL")
)

# Setup LLM
llm = ChatOpenAI(
    model="gpt-4o-mini",
    temperature=0.3
)

async def run_test():
    try:
        # Run evaluations
        result = await run_evals(
            dataset=ALL_TOOLS_DATASET,
            wallet=wallet,
            plugins=[],
            llm=llm,
            test_name="EVM Wallet Evaluation Tests"
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
