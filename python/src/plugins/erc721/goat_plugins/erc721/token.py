from dataclasses import dataclass
from typing import Dict, List, TypedDict


class ChainInfo(TypedDict):
    contractAddress: str


class Token(TypedDict):
    symbol: str
    name: str
    chains: Dict[int, ChainInfo]


@dataclass
class ChainSpecificToken:
    chainId: int
    symbol: str
    name: str
    contractAddress: str


# Example tokens
BAYC: Token = {
    "symbol": "BAYC",
    "name": "Bored Ape Yacht Club",
    "chains": {
        1: {
            "contractAddress": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
        },
    },
}

CRYPTOPUNKS: Token = {
    "symbol": "PUNK",
    "name": "CryptoPunks",
    "chains": {
        1: {
            "contractAddress": "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
        },
    },
}


def get_tokens_for_network(chain_id: int, tokens: List[Token]) -> List[ChainSpecificToken]:
    """
    Get a list of tokens that are available on a specific network.

    Args:
        chain_id: The ID of the chain to get tokens for
        tokens: The list of tokens to filter

    Returns:
        A list of ChainSpecificToken objects for the specified chain
    """
    result: List[ChainSpecificToken] = []

    for token in tokens:
        chain_data = token["chains"].get(chain_id)
        if chain_data:
            result.append(
                ChainSpecificToken(
                    chainId=chain_id,
                    symbol=token["symbol"],
                    name=token["name"],
                    contractAddress=chain_data["contractAddress"],
                )
            )

    return result
