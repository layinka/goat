"""ERC721 Plugin for GOAT SDK"""

from dataclasses import dataclass
from typing import List

from goat.classes.plugin_base import PluginBase
from goat.types.chain import Chain
from .service import Erc721Service
from .token import Token, get_tokens_for_network
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


__all__ = [
    "erc721",
    "ERC721Plugin",
    "ERC721PluginOptions",
    "GetBalanceParameters",
    "TransferParameters",
    "TotalSupplyParameters",
    "ApproveParameters",
    "TransferFromParameters",
    "OwnerOfParameters",
    "SetApprovalForAllParameters",
    "GetApprovedParameters",
    "IsApprovedForAllParameters",
]


@dataclass
class ERC721PluginOptions:
    """Options for initializing the ERC721 plugin"""
    tokens: List[Token]


class ERC721Plugin(PluginBase):
    """Plugin for interacting with ERC721 tokens"""
    def __init__(self, options: ERC721PluginOptions):
        super().__init__("erc721", [Erc721Service(options.tokens)])

    def supports_chain(self, chain: Chain) -> bool:
        """Check if the plugin supports a given chain"""
        return chain["type"] == "evm"


def erc721(options: ERC721PluginOptions) -> ERC721Plugin:
    """Create a new ERC721 plugin instance"""
    return ERC721Plugin(options)
