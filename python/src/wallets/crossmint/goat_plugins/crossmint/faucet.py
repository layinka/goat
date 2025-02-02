from goat.decorators.tool import Tool
from goat_wallets.evm import EVMWalletClient
from typing import Dict

from ...goat_wallets.crossmint.api_client import CrossmintWalletsAPI


class CrossmintFaucetService:
    def __init__(self, api_client: CrossmintWalletsAPI):
        self.api_client = api_client

    @Tool({
        "description": "Request tokens from faucet",
        "parameters_schema": {"type": "object", "properties": {
            "wallet_address": {"type": "string"},
            "chain_id": {"type": "string"}
        }}
    })
    def request_faucet_tokens(self, wallet_client: EVMWalletClient, parameters: dict) -> dict:
        try:
            return self.api_client.request_faucet_tokens(
                parameters["wallet_address"],
                parameters["chain_id"]
            )
        except Exception as error:
            raise Exception(f"Failed to request faucet tokens: {error}")
