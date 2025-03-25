import base58
import json
from typing import Dict, Any, Optional, List, Union
import requests

from goat.decorators.tool import Tool
from goat_wallets.evm import EVMWalletClient
from goat_wallets.solana import SolanaWalletClient

from .parameters import CreateAndPayOrderParameters


class CrossmintHeadlessCheckoutService:
    """Service for purchasing NFTs through Crossmint."""

    def __init__(self, api_key: str):
        """Initialize the service with the Crossmint API key."""
        self.api_key = api_key
        
    @Tool({
        "description": "Buy a token such as an NFT, SFT or item tokenized by them, listed on any blockchain",
        "parameters_schema": CreateAndPayOrderParameters
    })
    async def buy_token(
        self, 
        wallet_client: Union[EVMWalletClient, SolanaWalletClient], 
        parameters: Dict[str, Any]
    ):
        """
        Buy a token using the Crossmint API.
        
        Args:
            wallet_client: The wallet client to use for sending transactions
            parameters: The parameters for the purchase
            
        Returns:
            Dict containing order and transaction hash
        """
        try:
            # Create order via Crossmint API
            response = requests.post(
                "https://staging.crossmint.com/api/2022-06-09/orders",
                headers={
                    "x-api-key": self.api_key,
                    "Content-Type": "application/json",
                },
                json=parameters
            )
            
            if not response.ok:
                error_message = f"Failed to create buy order: {response.status_code} {response.reason}"
                try:
                    json_response = response.json()
                    error_message += f"\n\n{json.dumps(json_response, indent=2)}"
                except Exception as e:
                    print(f"Failed to parse JSON response: {e}")
                
                raise Exception(error_message)
            
            # Parse response
            response_data = response.json()
            order = response_data.get("order")
            
            # Handle various error states
            if order["payment"]["status"] == "crypto-payer-insufficient-funds":
                raise Exception("Insufficient funds")
                
            if order["quote"]["status"] == "requires-physical-address":
                raise Exception("recipient.physicalAddress is required")
                
            # Get serialized transaction
            serialized_transaction = None
            if (order["payment"]["preparation"] is not None and 
                "serializedTransaction" in order["payment"]["preparation"]):
                serialized_transaction = order["payment"]["preparation"]["serializedTransaction"]
                
            if not serialized_transaction:
                raise Exception(
                    f"No serialized transaction found for order, this item may not be available for purchase:\n\n"
                    f"{json.dumps(order, indent=2)}"
                )
            
            # Get payment method and handle accordingly
            payment_method = order["payment"]["method"]
            
            # Handle Solana transaction
            if payment_method == "solana":
                if not isinstance(wallet_client, SolanaWalletClient):
                    raise Exception(
                        "Solana wallet client required. Use a solana wallet client, or change the payment method "
                        "to one supported by your wallet client"
                    )
                
                transaction = base58.b58decode(serialized_transaction)
                solana_tx = wallet_client.deserialize_transaction(transaction)
                
                send_result = await wallet_client.send_transaction({
                    "instructions": solana_tx.instructions
                })
                
                return {"order": order, "txId": send_result["hash"]}
            
            # Handle EVM transaction
            evm_chains = ["ethereum", "ethereum-sepolia", "base", "base-sepolia", "polygon", "polygon-amoy"]
            if payment_method in evm_chains:
                if not isinstance(wallet_client, EVMWalletClient):
                    raise Exception(
                        "EVM wallet client required. Use an evm wallet client, or change the payment method "
                        "to one supported by your wallet client"
                    )
                
                if not serialized_transaction.startswith("0x"):
                    serialized_transaction = f"0x{serialized_transaction}"
                
                transaction = wallet_client.parse_transaction(serialized_transaction)
                if transaction.get("to") is None:
                    raise Exception("Transaction to is null")
                
                print(f"Paying order: {order['orderId']}")
                send_result = await wallet_client.send_transaction({
                    "to": transaction["to"],
                    "value": transaction.get("value", 0),
                    "data": transaction["data"]
                })
                
                return {"order": order, "txId": send_result["hash"]}
            
            raise Exception(f"Unsupported payment method: {payment_method}")
        except Exception as e:
            raise Exception(f"Failed to execute buy_token: {e}")
