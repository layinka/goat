from pydantic import BaseModel, Field
from typing import Optional, List, Literal


# Define supported chains
SupportedChains = Literal[
    "solana",
    "ethereum",
    "arbitrum",
    "avalanche",
    "bsc",
    "optimism",
    "polygon",
    "base",
    "zksync",
    "sui",
]


class GetTokenPriceParameters(BaseModel):
    list_address: List[str] = Field(
        ...,
        description="Array of token contract addresses (max 100)"
    )
    chain: SupportedChains = Field(
        ...,
        description="Chain name (e.g., ethereum, solana)"
    )
    include_liquidity: Optional[bool] = Field(
        None,
        description="Include liquidity"
    )


class GetTokenHistoryPriceParameters(BaseModel):
    address: str = Field(
        ...,
        description="Token contract address"
    )
    address_type: Literal["token", "pair"] = Field(
        "token",
        description="Address type"
    )
    type: Literal["1m", "3m", "15m", "30m", "1H", "2H", "4H", "6H", "8H", "12H", "1D", "3D", "1W", "1M"] = Field(
        ...,
        description="Time interval"
    )
    time_from: Optional[int] = Field(
        None,
        description="Unix timestamp"
    )
    time_to: Optional[int] = Field(
        None,
        description="Unix timestamp"
    )
    chain: SupportedChains = Field(
        ...,
        description="Chain name (e.g., ethereum, solana)"
    )


class GetOhlcvParameters(BaseModel):
    address: str = Field(
        ...,
        description="Token contract address"
    )
    type: Literal["1H", "4H", "12H", "1D", "1W", "1M"] = Field(
        ...,
        description="Time interval"
    )
    time_from: Optional[int] = Field(
        None,
        description="Unix timestamp"
    )
    time_to: Optional[int] = Field(
        None,
        description="Unix timestamp"
    )
    chain: SupportedChains = Field(
        ...,
        description="Chain name (e.g., ethereum, solana)"
    )


class GetOhlcvPairParameters(BaseModel):
    pair_address: str = Field(
        ...,
        description="Pair contract address"
    )
    type: Literal["1H", "4H", "12H", "1D", "1W", "1M"] = Field(
        ...,
        description="Time interval"
    )
    limit: Optional[int] = Field(
        None,
        description="Number of data points to return"
    )
    chain: SupportedChains = Field(
        ...,
        description="Chain name (e.g., ethereum, solana)"
    )


class GetTokenSecurityParameters(BaseModel):
    address: str = Field(
        ...,
        description="Token contract address"
    )
    chain: SupportedChains = Field(
        ...,
        description="Chain name (e.g., ethereum, solana)"
    )


class GetTrendingTokensParameters(BaseModel):
    chain: SupportedChains = Field(
        ...,
        description="Chain name (e.g., ethereum, solana)"
    )
    sort_by: Literal["rank", "volume24hUSD", "liquidity"] = Field(
        ...,
        description="Sort by"
    )
    sort_type: Literal["asc", "desc"] = Field(
        ...,
        description="Sort type"
    )
    offset: Optional[int] = Field(
        None,
        description="Offset"
    )
    limit: Optional[int] = Field(
        None,
        description="Limit"
    )


class SearchTokenParameters(BaseModel):
    keyword: str = Field(
        ...,
        description="Search query"
    )
    chain: SupportedChains = Field(
        ...,
        description="Chain name (e.g., ethereum, solana)"
    )
    sort_by: Literal[
        "fdv",
        "marketcap",
        "liquidity",
        "price",
        "price_change_24h_percent",
        "trade_24h",
        "trade_24h_change_percent",
        "buy_24h",
        "buy_24h_change_percent",
        "sell_24h",
        "sell_24h_change_percent",
        "unique_wallet_24h",
        "unique_wallet_24h_change_percent",
        "last_trade_unix_time",
        "volume_24h_usd",
        "volume_24h_change_percent",
    ] = Field(
        ...,
        description="Sort by"
    )
    sort_type: Literal["asc", "desc"] = Field(
        ...,
        description="Sort type"
    )
    verify_token: Optional[bool] = Field(
        None,
        description="A filter to retrieve tokens based on their verification status (supported on Solana)"
    )
    markets: Optional[List[Literal[
        "Raydium",
        "Raydium CP",
        "Raydium Clamm",
        "Meteora",
        "Meteora DLMM",
        "Fluxbeam",
        "Pump.fun",
        "OpenBook",
        "OpenBook V2",
        "Orca",
    ]]] = Field(
        None,
        description="list of market sources to filter results (supported on Solana)"
    )
    offset: Optional[int] = Field(
        None,
        description="Offset"
    )
    limit: Optional[int] = Field(
        None,
        description="Limit"
    )
