import asyncio
from typing import Dict
import base58
from solana.transaction import Transaction, TransactionInstruction
from solders.pubkey import Pubkey
from solana.rpc.async_api import AsyncClient as AsyncSolanaClient
from goat.classes.wallet_client_base import Balance, Signature
from goat_wallets.solana import SolanaWalletClient, SolanaTransaction
from .api_client import CrossmintWalletsAPI


def get_locator(params: Dict) -> str:
    """Get wallet locator from parameters."""
    if "address" in params:
        return params["address"]
    if "email" in params:
        return f"email:{params['email']}:solana-custodial-wallet"
    if "phone" in params:
        return f"phone:{params['phone']}:solana-custodial-wallet"
    return f"userId:{params['userId']}:solana-custodial-wallet"


class CustodialSolanaWalletClient(SolanaWalletClient):
    """Solana custodial wallet implementation using Crossmint."""
    
    def __init__(
        self,
        address: str,
        api_client: CrossmintWalletsAPI,
        connection: AsyncSolanaClient,
        options: Dict
    ):
        """Initialize custodial wallet client.
        
        Args:
            address: Wallet address
            api_client: Crossmint API client
            connection: Solana RPC connection
            options: Additional options
        """
        super().__init__(connection)
        self._address = address
        self._client = api_client
        self._locator = get_locator(options)
        self.connection = connection
    
    def get_address(self) -> str:
        """Get wallet address."""
        return self._address
    
    async def sign_message(self, message: str) -> Signature:
        """Sign a message with the wallet's private key.
        
        Args:
            message: Message to sign
            
        Returns:
            Signature object containing the signature
        """
        try:
            response = await self._client.sign_message_for_custodial_wallet(
                self._locator,
                message
            )
            
            while True:
                status = await self._client.check_signature_status(
                    response["id"],
                    self._address
                )
                
                if status["status"] == "success":
                    if not status.get("outputSignature"):
                        raise ValueError("Signature is undefined")
                    return Signature(signature=status["outputSignature"])
                
                if status["status"] == "failed":
                    raise ValueError("Signature failed")
                
                await asyncio.sleep(3)  # Wait 3 seconds before checking again
                
        except Exception as e:
            raise ValueError(f"Failed to sign message: {e}")
    
    async def send_transaction(self, transaction: SolanaTransaction) -> Dict[str, str]:
        """Send a transaction on the Solana chain.
        
        Args:
            transaction: Transaction parameters including instructions and optional lookup tables
            
        Returns:
            Dict containing the transaction hash
        """
        # Create transaction message
        message = Transaction()
        message.recent_blockhash = str(Pubkey.default())  # Placeholder
        message.fee_payer = Pubkey.from_string(self._address)
        
        # Add instructions
        for instruction in transaction["instructions"]:
            message.add(TransactionInstruction.from_legacy(instruction))
        
        # Serialize and encode transaction
        serialized = base58.b58encode(
            bytes(message.serialize())
        ).decode()
        
        # Create and submit transaction
        response = await self._client.create_transaction_for_custodial_wallet(
            self._locator,
            serialized
        )
        
        # Wait for completion
        while True:
            status = await self._client.check_transaction_status(
                self._locator,
                response["id"]
            )
            
            if status["status"] == "success":
                return {
                    "hash": status.get("onChain", {}).get("txId", "")
                }
            
            if status["status"] == "failed":
                raise ValueError(
                    f"Transaction failed: {status.get('onChain', {}).get('txId')}"
                )
            
            await asyncio.sleep(3)
    
    async def balance_of(self, address: str) -> Balance:
        """Get the SOL balance of an address.
        
        Args:
            address: The address to check balance for
            
        Returns:
            Balance object containing token information and value
        """
        pubkey = Pubkey.from_string(address)
        balance = await self.connection.get_balance(pubkey)
        
        return Balance(
            value=str(balance / 10**9),
            in_base_units=str(balance),
            decimals=9,
            symbol="SOL",
            name="Solana"
        )


def custodial_factory(api_client: CrossmintWalletsAPI):
    """Factory function to create custodial wallet instances."""
    async def create_custodial(options: Dict) -> CustodialSolanaWalletClient:
        """Create a new custodial wallet instance."""
        locator = get_locator(options)
        wallet = await api_client.get_wallet(locator)
        
        return CustodialSolanaWalletClient(
            wallet["address"],
            api_client,
            options["connection"],
            options
        )
    
    return create_custodial
