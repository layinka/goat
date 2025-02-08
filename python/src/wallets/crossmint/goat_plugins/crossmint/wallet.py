from goat.decorators.tool import Tool
from goat_wallets.evm import EVMWalletClient
from goat_wallets.solana import SolanaWalletClient
from typing import Dict, List

from .parameters import (
    CreateSmartWalletParameters,
    CreateCustodialWalletParameters,
    WalletResponse,
    SignatureResponse,
    TransactionResponse,
    Call,
    CreateWalletForTwitterUserParameters,
    CreateWalletForEmailParameters,
    GetWalletByTwitterUsernameParameters,
    GetWalletByEmailParameters
)
from ...goat_wallets.crossmint.api_client import CrossmintWalletsAPI


class CrossmintWalletService:
    def __init__(self, api_client: CrossmintWalletsAPI):
        self.api_client = api_client

    @Tool({
        "description": "Create a new EVM smart wallet",
        "parameters_schema": CreateSmartWalletParameters
    })
    def create_smart_wallet(self, wallet_client: EVMWalletClient, parameters: dict) -> WalletResponse:
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
        try:
            response = self.api_client.approve_transaction(
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
        try:
            response = self.api_client.check_transaction_status(
                parameters["locator"],
                parameters["transaction_id"]
            )
            return TransactionResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to check transaction status: {error}")

    @Tool({
        "description": "Create a wallet for a Twitter user",
        "parameters_schema": CreateWalletForTwitterUserParameters
    })
    def create_wallet_for_twitter_user(self, wallet_client: EVMWalletClient, parameters: CreateWalletForTwitterUserParameters) -> WalletResponse:
        try:
            response = self.api_client.create_wallet_for_twitter_user(
                parameters.username,
                parameters.chain
            )
            return WalletResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to create wallet for Twitter user: {error}")

    @Tool({
        "description": "Create a wallet for an email user",
        "parameters_schema": CreateWalletForEmailParameters
    })
    def create_wallet_for_email(self, wallet_client: EVMWalletClient, parameters: CreateWalletForEmailParameters) -> WalletResponse:
        try:
            response = self.api_client.create_wallet_for_email(
                parameters.email,
                parameters.chain
            )
            return WalletResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to create wallet for email user: {error}")

    @Tool({
        "description": "Get wallet by Twitter username",
        "parameters_schema": GetWalletByTwitterUsernameParameters
    })
    def get_wallet_by_twitter_username(self, wallet_client: EVMWalletClient, parameters: GetWalletByTwitterUsernameParameters) -> WalletResponse:
        try:
            response = self.api_client.get_wallet_by_twitter_username(
                parameters.username,
                parameters.chain
            )
            return WalletResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to get wallet by Twitter username: {error}")

    @Tool({
        "description": "Get wallet by email",
        "parameters_schema": GetWalletByEmailParameters
    })
    def get_wallet_by_email(self, wallet_client: EVMWalletClient, parameters: GetWalletByEmailParameters) -> WalletResponse:
        try:
            response = self.api_client.get_wallet_by_email(
                parameters.email,
                parameters.chain
            )
            return WalletResponse(**response)
        except Exception as error:
            raise Exception(f"Failed to get wallet by email: {error}")
