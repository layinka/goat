import os
import asyncio
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

from langchain_openai import ChatOpenAI
from langchain.agents import AgentExecutor, create_tool_calling_agent
from langchain_core.prompts import ChatPromptTemplate
from solana.rpc.api import Client as SolanaClient
from solders.keypair import Keypair

from goat_adapters.langchain import get_on_chain_tools
from goat_wallets.solana import solana
from goat_wallets.crossmint import custodial_factory
from goat_plugins.spl_token import spl_token, SplTokenPluginOptions
from goat_plugins.spl_token.tokens import SPL_TOKENS
from goat_wallets.crossmint.api_client import CrossmintWalletsAPI

# Initialize Solana client
client = SolanaClient(os.getenv("SOLANA_RPC_ENDPOINT"))

# Initialize regular Solana wallet
keypair = Keypair.from_base58_string(os.getenv("SOLANA_WALLET_SEED") or "")
wallet = solana(client, keypair)

# Initialize Crossmint custodial wallet
async def init_crossmint_wallet():
    crossmint_api = CrossmintWalletsAPI(os.getenv("CROSSMINT_API_KEY"))
    crossmint_wallet_factory = custodial_factory(crossmint_api)
    return await crossmint_wallet_factory({
        "chain": "solana",
        "connection": client,
        "email": os.getenv("CROSSMINT_USER_EMAIL")
    })

# Initialize LLM
llm = ChatOpenAI(model="gpt-4o-mini")


async def main():
    # Initialize Crossmint wallet
    crossmint_wallet = await init_crossmint_wallet()
    
    # Get the prompt template
    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", "You are a helpful assistant"),
            ("placeholder", "{chat_history}"),
            ("human", "{input}"),
            ("placeholder", "{agent_scratchpad}"),
        ]
    )

    # Initialize SPL Token plugin
    spl_token_plugin = spl_token(SplTokenPluginOptions(
        network="devnet",  # Using devnet as specified in .env
        tokens=SPL_TOKENS
    ))

    # Initialize tools with both wallets
    # Use regular Solana wallet by default
    tools = get_on_chain_tools(
        wallet=wallet,
        plugins=[spl_token_plugin]
    )
    
    # Example of using Crossmint wallet instead:
    # tools = get_on_chain_tools(
    #     wallet=crossmint_wallet,
    #     plugins=[spl_token_plugin]
    # )

    agent = create_tool_calling_agent(llm, tools, prompt)
    agent_executor = AgentExecutor(
        agent=agent, tools=tools, handle_parsing_errors=True, verbose=True
    )

    while True:
        user_input = input("\nYou: ").strip()

        if user_input.lower() == "quit":
            print("Goodbye!")
            break

        try:
            response = agent_executor.invoke(
                {
                    "input": user_input,
                }
            )

            print("\nAssistant:", response["output"])
        except Exception as e:
            print("\nError:", str(e))


if __name__ == "__main__":
    asyncio.run(main())
