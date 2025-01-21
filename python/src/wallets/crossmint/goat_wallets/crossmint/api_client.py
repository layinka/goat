from typing import Any, Dict, List, Optional
import aiohttp
from pydantic import BaseModel
import json
from urllib.parse import quote
from goat_wallets.evm import EVMTypedData


class AdminSigner(BaseModel):
    """Configuration for admin signer in wallet creation."""
    type: str  # evm-keypair, solana-keypair, etc.
    address: Optional[str] = None
    locator: Optional[str] = None


class TransactionApprovals(BaseModel):
    """Structure for transaction approvals."""
    pending: List[Dict[str, Any]]  # Omitting signature, submittedAt, metadata
    submitted: List[Dict[str, Any]]  # Full approval submissions
    required: Optional[int] = None  # For multisig scenarios


class Call(BaseModel):
    """Structure for EVM transaction calls."""
    to: str
    value: str
    data: str


class TransactionParams(BaseModel):
    """Parameters for transaction creation."""
    calls: Optional[List[Call]] = None
    chain: Optional[str] = None
    signer: Optional[str] = None
    transaction: Optional[str] = None
    signers: Optional[List[str]] = None


class CrossmintWalletsAPI:
    """Python implementation of CrossmintWalletsAPI."""
    
    def __init__(self, api_key: str, base_url: str = "https://api.crossmint.com"):
        """Initialize the Crossmint Wallets API client.
        
        Args:
            api_key: API key for authentication
            base_url: Base URL for the Crossmint API
        """
        self.api_key = api_key
        self.base_url = f"{base_url}/api/v1-alpha2"
    
    async def _request(self, endpoint: str, method: str = "GET", **kwargs) -> Dict[str, Any]:
        """Make an HTTP request to the Crossmint API.
        
        Args:
            endpoint: API endpoint (relative to base_url)
            method: HTTP method to use
            **kwargs: Additional arguments to pass to aiohttp
        
        Returns:
            Parsed JSON response
        
        Raises:
            Exception: If the response is not OK
        """
        url = f"{self.base_url}{endpoint}"
        headers = {
            "x-api-key": self.api_key,
            "Content-Type": "application/json",
            **(kwargs.pop("headers", {}))
        }
        
        try:
            async with aiohttp.ClientSession() as session:
                async with session.request(method, url, headers=headers, **kwargs) as response:
                    response_body = await response.json()
                    
                    if not response.ok:
                        error_message = f"Error {response.status}: {response.reason}"
                        if response_body:
                            error_message += f"\n\n{json.dumps(response_body, indent=2)}"
                        raise Exception(error_message)
                    
                    return response_body
        except Exception as e:
            raise Exception(f"Failed to {method.lower()} {endpoint}: {e}")
    
    async def create_smart_wallet(self, admin_signer: Optional[AdminSigner] = None) -> Dict[str, Any]:
        """Create a new EVM smart wallet.
        
        Args:
            admin_signer: Optional admin signer configuration
        
        Returns:
            Wallet creation response
        """
        payload = {
            "type": "evm-smart-wallet",
            "config": {
                "adminSigner": admin_signer.dict() if admin_signer else None
            }
        }
        
        return await self._request("/wallets", method="POST", json=payload)
    
    async def create_custodial_wallet(self, linked_user: str) -> Dict[str, Any]:
        """Create a new Solana custodial wallet.
        
        Args:
            linked_user: User identifier to link the wallet to
        
        Returns:
            Wallet creation response
        """
        payload = {
            "type": "solana-custodial-wallet",
            "linkedUser": linked_user
        }
        
        return await self._request("/wallets", method="POST", json=payload)
    
    async def get_wallet(self, locator: str) -> Dict[str, Any]:
        """Get wallet details by locator.
        
        Args:
            locator: Wallet locator string
        
        Returns:
            Wallet details
        """
        endpoint = f"/wallets/{quote(locator)}"
        return await self._request(endpoint)
    
    async def sign_message_for_custodial_wallet(
        self, locator: str, message: str
    ) -> Dict[str, Any]:
        """Sign a message using a Solana custodial wallet.
        
        Args:
            locator: Wallet locator string
            message: Message to sign
        
        Returns:
            Signature response
        """
        endpoint = f"/wallets/{quote(locator)}/signatures"
        payload = {
            "type": "solana-message",
            "params": {"message": message}
        }
        
        return await self._request(endpoint, method="POST", json=payload)
    
    async def sign_message_for_smart_wallet(
        self,
        wallet_address: str,
        message: str,
        chain: str,
        signer: Optional[str] = None
    ) -> Dict[str, Any]:
        """Sign a message using an EVM smart wallet.
        
        Args:
            wallet_address: Wallet address
            message: Message to sign
            chain: Chain identifier
            signer: Optional signer address
        
        Returns:
            Signature response
        """
        endpoint = f"/wallets/{quote(wallet_address)}/signatures"
        payload = {
            "type": "evm-message",
            "params": {
                "message": message,
                "signer": signer,
                "chain": chain
            }
        }
        
        return await self._request(endpoint, method="POST", json=payload)
    
    async def sign_typed_data_for_smart_wallet(
        self,
        wallet_address: str,
        typed_data: EVMTypedData,
        chain: str,
        signer: str
    ) -> Dict[str, Any]:
        """Sign typed data using an EVM smart wallet.
        
        Args:
            wallet_address: Wallet address
            typed_data: EVM typed data to sign
            chain: Chain identifier
            signer: Signer address
        
        Returns:
            Signature response
        """
        endpoint = f"/wallets/{quote(wallet_address)}/signatures"
        payload = {
            "type": "evm-typed-data",
            "params": {
                "typedData": typed_data,
                "chain": chain,
                "signer": signer
            }
        }
        
        return await self._request(endpoint, method="POST", json=payload)

    async def check_signature_status(
        self, signature_id: str, wallet_address: str
    ) -> Dict[str, Any]:
        """Check the status of a signature request.
        
        Args:
            signature_id: ID of the signature request
            wallet_address: Address of the wallet
        
        Returns:
            Signature status response
        """
        endpoint = f"/wallets/{quote(wallet_address)}/signatures/{quote(signature_id)}"
        return await self._request(endpoint)
    
    async def approve_signature_for_smart_wallet(
        self,
        signature_id: str,
        locator: str,
        signer: str,
        signature: str
    ) -> Dict[str, Any]:
        """Approve a signature request for an EVM smart wallet.
        
        Args:
            signature_id: ID of the signature request
            locator: Wallet locator string
            signer: Signer identifier
            signature: Signature value
        
        Returns:
            Approval response
        """
        endpoint = f"/wallets/{quote(locator)}/signatures/{quote(signature_id)}/approvals"
        payload = {
            "approvals": [{
                "signer": signer,
                "signature": signature
            }]
        }
        
        return await self._request(endpoint, method="POST", json=payload)
    
    async def create_transaction_for_custodial_wallet(
        self, locator: str, transaction: str
    ) -> Dict[str, Any]:
        """Create a transaction using a Solana custodial wallet.
        
        Args:
            locator: Wallet locator string
            transaction: Encoded transaction data
        
        Returns:
            Transaction creation response
        """
        endpoint = f"/wallets/{quote(locator)}/transactions"
        payload = {
            "params": {
                "transaction": transaction
            }
        }
        
        return await self._request(endpoint, method="POST", json=payload)
    
    async def create_transaction_for_smart_wallet(
        self,
        wallet_address: str,
        calls: List[Call],
        chain: str,
        signer: Optional[str] = None
    ) -> Dict[str, Any]:
        """Create a transaction using an EVM smart wallet.
        
        Args:
            wallet_address: Wallet address
            calls: List of contract calls
            chain: Chain identifier
            signer: Optional signer address
        
        Returns:
            Transaction creation response
        """
        endpoint = f"/wallets/{quote(wallet_address)}/transactions"
        payload = {
            "params": {
                "calls": [call.dict() for call in calls],
                "chain": chain,
                "signer": f"evm-keypair:{signer}" if signer else None
            }
        }
        
        return await self._request(endpoint, method="POST", json=payload)
    
    async def approve_transaction(
        self,
        locator: str,
        transaction_id: str,
        approvals: List[Dict[str, str]]
    ) -> Dict[str, Any]:
        """Approve a transaction.
        
        Args:
            locator: Wallet locator string
            transaction_id: ID of the transaction
            approvals: List of approval objects with signer and signature
        
        Returns:
            Approval response
        """
        endpoint = f"/wallets/{quote(locator)}/transactions/{quote(transaction_id)}/approvals"
        payload = {"approvals": approvals}
        
        return await self._request(endpoint, method="POST", json=payload)
    
    async def check_transaction_status(
        self, locator: str, transaction_id: str
    ) -> Dict[str, Any]:
        """Check the status of a transaction.
        
        Args:
            locator: Wallet locator string
            transaction_id: ID of the transaction
        
        Returns:
            Transaction status response
        """
        endpoint = f"/wallets/{quote(locator)}/transactions/{quote(transaction_id)}"
        return await self._request(endpoint)
