from goat.decorators.tool import Tool
from .parameters import (
    GetBalanceParameters,
    TransferParameters,
    TotalSupplyParameters,
    ApproveParameters,
    TransferFromParameters,
    OwnerOfParameters,
    SetApprovalForAllParameters,
    GetApprovedParameters,
    IsApprovedForAllParameters,
)
from .abi import ERC721_ABI
from goat_wallets.evm import EVMWalletClient


class Erc721Service:
    def __init__(self, tokens: list = []):
        self.tokens = tokens

    @Tool(
        {
            "description": "Get the number of NFTs owned by a specific address",
            "parameters_schema": GetBalanceParameters,
        }
    )
    def get_token_balance(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            resolved_wallet_address = wallet_client.resolve_address(
                parameters["wallet"]
            )

            raw_balance = wallet_client.read(
                {
                    "address": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "balanceOf",
                    "args": [resolved_wallet_address],
                }
            )

            return int(raw_balance["value"])
        except Exception as error:
            raise Exception(f"Failed to fetch balance: {error}")

    @Tool(
        {
            "description": "Transfer an NFT to another address",
            "parameters_schema": TransferParameters,
        }
    )
    def transfer(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            to_address = wallet_client.resolve_address(parameters["to"])
            from_address = wallet_client.get_address()

            hash_result = wallet_client.send_transaction(
                {
                    "to": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "safeTransferFrom",
                    "args": [from_address, to_address, parameters["tokenId"]],
                }
            )
            return hash_result["hash"]
        except Exception as error:
            raise Exception(f"Failed to transfer: {error}")

    @Tool(
        {
            "description": "Get the total supply of NFTs",
            "parameters_schema": TotalSupplyParameters,
        }
    )
    def get_token_total_supply(
        self, wallet_client: EVMWalletClient, parameters: dict
    ):
        try:
            raw_total_supply = wallet_client.read(
                {
                    "address": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "totalSupply",
                }
            )

            return raw_total_supply["value"]
        except Exception as error:
            raise Exception(f"Failed to fetch total supply: {error}")

    @Tool(
        {
            "description": "Approve an address to transfer a specific NFT",
            "parameters_schema": ApproveParameters,
        }
    )
    def approve(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            spender = wallet_client.resolve_address(parameters["spender"])

            hash_result = wallet_client.send_transaction(
                {
                    "to": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "approve",
                    "args": [spender, parameters["tokenId"]],
                }
            )
            return hash_result["hash"]
        except Exception as error:
            raise Exception(f"Failed to approve: {error}")

    @Tool(
        {
            "description": "Transfer an NFT from one address to another",
            "parameters_schema": TransferFromParameters,
        }
    )
    def transfer_from(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            from_address = wallet_client.resolve_address(parameters["from"])
            to_address = wallet_client.resolve_address(parameters["to"])

            hash_result = wallet_client.send_transaction(
                {
                    "to": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "safeTransferFrom",
                    "args": [from_address, to_address, parameters["tokenId"]],
                }
            )
            return hash_result["hash"]
        except Exception as error:
            raise Exception(f"Failed to transfer from: {error}")

    @Tool(
        {
            "description": "Get the owner of a specific NFT",
            "parameters_schema": OwnerOfParameters,
        }
    )
    def owner_of(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            raw_owner = wallet_client.read(
                {
                    "address": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "ownerOf",
                    "args": [parameters["tokenId"]],
                }
            )

            return raw_owner["value"]
        except Exception as error:
            raise Exception(f"Failed to fetch owner: {error}")

    @Tool(
        {
            "description": "Set or revoke approval for all NFTs to an operator",
            "parameters_schema": SetApprovalForAllParameters,
        }
    )
    def set_approval_for_all(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            operator = wallet_client.resolve_address(parameters["operator"])

            hash_result = wallet_client.send_transaction(
                {
                    "to": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "setApprovalForAll",
                    "args": [operator, parameters["approved"]],
                }
            )
            return hash_result["hash"]
        except Exception as error:
            raise Exception(f"Failed to set approval for all: {error}")

    @Tool(
        {
            "description": "Get the approved address for a specific NFT",
            "parameters_schema": GetApprovedParameters,
        }
    )
    def get_approved(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            raw_approved = wallet_client.read(
                {
                    "address": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "getApproved",
                    "args": [parameters["tokenId"]],
                }
            )

            return raw_approved["value"]
        except Exception as error:
            raise Exception(f"Failed to fetch approved address: {error}")

    @Tool(
        {
            "description": "Check if an operator is approved for all NFTs of an owner",
            "parameters_schema": IsApprovedForAllParameters,
        }
    )
    def is_approved_for_all(self, wallet_client: EVMWalletClient, parameters: dict):
        try:
            owner = wallet_client.resolve_address(parameters["owner"])
            operator = wallet_client.resolve_address(parameters["operator"])

            raw_is_approved = wallet_client.read(
                {
                    "address": parameters["tokenAddress"],
                    "abi": ERC721_ABI,
                    "functionName": "isApprovedForAll",
                    "args": [owner, operator],
                }
            )

            return raw_is_approved["value"]
        except Exception as error:
            raise Exception(f"Failed to check approval for all: {error}")
