from goat.decorators.tool import Tool
from goat_wallets.evm import EVMWalletClient
from goat_wallets.solana import SolanaWalletClient
from .parameters import (
    CreateSmartWalletParameters,
    CreateCustodialWalletParameters,
    WalletResponse,
    SignatureResponse,
    TransactionResponse,
    Call
)
from ...goat_wallets.crossmint.api_client import CrossmintWalletsAPI


class CrossmintService:
    """Service class for interacting with Crossmint API."""

    def __init__(self, api_key: str, base_url: str = "https://api.crossmint.com"):
        """Initialize the Crossmint service.
        
        Args:
            api_key: API key for authentication
            base_url: Base URL for the Crossmint API
        """
        self.api_client = CrossmintWalletsAPI(api_key, base_url)

    @Tool({
        "description": "Create a new EVM smart wallet",
        "parameters_schema": CreateSmartWalletParameters
    })
    def create_smart_wallet(self, wallet_client: EVMWalletClient, parameters: dict) -> WalletResponse:
        """Create a new EVM smart wallet.
        
        Args:
            wallet_client: EVM wallet client
            parameters: Smart wallet creation parameters
        
        Returns:
            Created wallet details
        """
        try:
            response = self.api_client.create_smart_wallet(parameters.get("admin_signer"))
            return WalletResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to create smart wallet: {error}")

    @Tool({
        "description": "Create a new Solana custodial wallet",
        "parameters_schema": CreateCustodialWalletParameters
    })
    def create_custodial_wallet(self, wallet_client: SolanaWalletClient, parameters: dict) -> WalletResponse:
        """Create a new Solana custodial wallet.
        
        Args:
            wallet_client: Solana wallet client
            parameters: Custodial wallet creation parameters
        
        Returns:
            Created wallet details
        """
        try:
            response = self.api_client.create_custodial_wallet(parameters["linked_user"])
            return WalletResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to create custodial wallet: {error}")

    @Tool({
        "description": "Get wallet details by locator",
        "parameters_schema": {"type": "object", "properties": {"locator": {"type": "string"}}}
    })
    def get_wallet(self, wallet_client: EVMWalletClient, parameters: dict) -> WalletResponse:
        """Get wallet details by locator.
        
        Args:
            wallet_client: Wallet client
            parameters: Parameters containing wallet locator
        
        Returns:
            Wallet details
        """
        try:
            response = self.api_client.get_wallet(parameters["locator"])
            return WalletResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to get wallet: {error}")

    @Tool({
        "description": "Sign a message using a Solana custodial wallet",
        "parameters_schema": {"type": "object", "properties": {
            "locator": {"type": "string"},
            "message": {"type": "string"}
        }}
    })
    def sign_message_custodial(self, wallet_client: SolanaWalletClient, parameters: dict) -> SignatureResponse:
        """Sign a message using a Solana custodial wallet.
        
        Args:
            wallet_client: Solana wallet client
            parameters: Parameters containing locator and message
        
        Returns:
            Signature response
        """
        try:
            response = self.api_client.sign_message_for_custodial_wallet(
                parameters["locator"],
                parameters["message"]
            )
            return SignatureResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to sign message: {error}")

    @Tool({
        "description": "Sign a message using an EVM smart wallet",
        "parameters_schema": {"type": "object", "properties": {
            "wallet_address": {"type": "string"},
            "message": {"type": "string"},
            "chain": {"type": "string"},
            "signer": {"type": "string", "optional": True}
        }}
    })
    def sign_message_smart(self, wallet_client: EVMWalletClient, parameters: dict) -> SignatureResponse:
        """Sign a message using an EVM smart wallet.
        
        Args:
            wallet_client: EVM wallet client
            parameters: Parameters containing wallet address, message, chain, and optional signer
        
        Returns:
            Signature response
        """
        try:
            response = self.api_client.sign_message_for_smart_wallet(
                parameters["wallet_address"],
                parameters["message"],
                parameters["chain"],
                parameters.get("signer")
            )
            return SignatureResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to sign message: {error}")

    @Tool({
        "description": "Sign typed data using an EVM smart wallet",
        "parameters_schema": {"type": "object", "properties": {
            "wallet_address": {"type": "string"},
            "typed_data": {"type": "object"},
            "chain": {"type": "string"},
            "signer": {"type": "string"}
        }}
    })
    def sign_typed_data_smart(self, wallet_client: EVMWalletClient, parameters: dict) -> SignatureResponse:
        """Sign typed data using an EVM smart wallet.
        
        Args:
            wallet_client: EVM wallet client
            parameters: Parameters containing wallet address, typed data, chain, and signer
        
        Returns:
            Signature response
        """
        try:
            response = self.api_client.sign_typed_data_for_smart_wallet(
                parameters["wallet_address"],
                parameters["typed_data"],
                parameters["chain"],
                parameters["signer"]
            )
            return SignatureResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to sign typed data: {error}")

    @Tool({
        "description": "Check signature status",
        "parameters_schema": {"type": "object", "properties": {
            "signature_id": {"type": "string"},
            "wallet_address": {"type": "string"}
        }}
    })
    def check_signature_status(self, wallet_client: EVMWalletClient, parameters: dict) -> SignatureResponse:
        """Check the status of a signature request.
        
        Args:
            wallet_client: Wallet client
            parameters: Parameters containing signature ID and wallet address
        
        Returns:
            Signature status
        """
        try:
            response = self.api_client.check_signature_status(
                parameters["signature_id"],
                parameters["wallet_address"]
            )
            return SignatureResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to check signature status: {error}")

    @Tool({
        "description": "Create a transaction using a Solana custodial wallet",
        "parameters_schema": {"type": "object", "properties": {
            "locator": {"type": "string"},
            "transaction": {"type": "string"}
        }}
    })
    def create_transaction_custodial(self, wallet_client: SolanaWalletClient, parameters: dict) -> TransactionResponse:
        """Create a transaction using a Solana custodial wallet.
        
        Args:
            wallet_client: Solana wallet client
            parameters: Parameters containing locator and transaction data
        
        Returns:
            Transaction response
        """
        try:
            response = self.api_client.create_transaction_for_custodial_wallet(
                parameters["locator"],
                parameters["transaction"]
            )
            return TransactionResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to create transaction: {error}")

    @Tool({
        "description": "Create a transaction using an EVM smart wallet",
        "parameters_schema": {"type": "object", "properties": {
            "wallet_address": {"type": "string"},
            "calls": {"type": "array", "items": {"$ref": "#/definitions/Call"}},
            "chain": {"type": "string"},
            "signer": {"type": "string", "optional": True}
        }}
    })
    def create_transaction_smart(self, wallet_client: EVMWalletClient, parameters: dict) -> TransactionResponse:
        """Create a transaction using an EVM smart wallet.
        
        Args:
            wallet_client: EVM wallet client
            parameters: Parameters containing wallet address, calls, chain, and optional signer
        
        Returns:
            Transaction response
        """
        try:
            response = self.api_client.create_transaction_for_smart_wallet(
                parameters["wallet_address"],
                [Call(**call) for call in parameters["calls"]],
                parameters["chain"],
                parameters.get("signer")
            )
            return TransactionResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to create transaction: {error}")

    @Tool({
        "description": "Approve a transaction",
        "parameters_schema": {"type": "object", "properties": {
            "locator": {"type": "string"},
            "transaction_id": {"type": "string"},
            "approvals": {"type": "array", "items": {
                "type": "object",
                "properties": {
                    "signer": {"type": "string"},
                    "signature": {"type": "string"}
                }
            }}
        }}
    })
    def approve_transaction(self, wallet_client: EVMWalletClient, parameters: dict) -> TransactionResponse:
        """Approve a transaction.
        
        Args:
            wallet_client: Wallet client
            parameters: Parameters containing locator, transaction ID, and approvals
        
        Returns:
            Transaction response
        """
        try:
            response = await self.api_client.approve_transaction(
                parameters["locator"],
                parameters["transaction_id"],
                parameters["approvals"]
            )
            return TransactionResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to approve transaction: {error}")

    @Tool({
        "description": "Check transaction status",
        "parameters_schema": {"type": "object", "properties": {
            "locator": {"type": "string"},
            "transaction_id": {"type": "string"}
        }}
    })
    def check_transaction_status(self, wallet_client: EVMWalletClient, parameters: dict) -> TransactionResponse:
        """Check the status of a transaction.
        
        Args:
            wallet_client: Wallet client
            parameters: Parameters containing locator and transaction ID
        
        Returns:
            Transaction status
        """
        try:
            response = self.api_client.check_transaction_status(
                parameters["locator"],
                parameters["transaction_id"]
            )
            return TransactionResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to check transaction status: {error}")
