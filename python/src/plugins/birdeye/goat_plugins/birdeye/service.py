import aiohttp
from goat.decorators.tool import Tool
from .parameters import (
    GetTokenPriceParameters,
    GetTokenHistoryPriceParameters,
    GetOhlcvParameters,
    GetOhlcvPairParameters,
    GetTokenSecurityParameters,
    GetTrendingTokensParameters,
    SearchTokenParameters,
)


class BirdeyeService:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://public-api.birdeye.so"

    @Tool({
        "description": "Get price information for a token or multiple tokens (max 100)",
        "parameters_schema": GetTokenPriceParameters
    })
    async def get_token_price(self, parameters: dict):
        """Get price information for a token or multiple tokens (max 100).
        
        Args:
            parameters: Dictionary containing:
                - list_address: List of token addresses (max 100)
                - chain: Chain name (e.g., ethereum, solana)
                - include_liquidity: Optional flag to include liquidity info
        """
        list_address = parameters["list_address"]
        include_liquidity = parameters.get("include_liquidity", False)
        
        query_str = f"/defi/multi_price?&addresses={','.join(list_address)}"
        if include_liquidity:
            query_str += "&include_liquidity=true"
        
        url = f"{self.base_url}{query_str}"
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers={"X-API-KEY": self.api_key}) as response:
                if not response.ok:
                    raise Exception(f"HTTP error! status: {response.status} {await response.text()}")
                return await response.json()

    @Tool({
        "description": "Get historical price line chart for a token",
        "parameters_schema": GetTokenHistoryPriceParameters
    })
    async def get_token_history_price(self, parameters: dict):
        """Get historical price line chart for a token.
        
        Args:
            parameters: Dictionary containing:
                - address: Token contract address
                - address_type: Type of address ('token' or 'pair')
                - type: Time interval
                - time_from: Optional Unix timestamp
                - time_to: Optional Unix timestamp
                - chain: Chain name
        """
        # Filter out None values
        query_params = {k: v for k, v in parameters.items() if v is not None}
        query_str = "&".join(f"{k}={v}" for k, v in query_params.items())
        
        url = f"{self.base_url}/defi/history_price?{query_str}"
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers={"X-API-KEY": self.api_key}) as response:
                if not response.ok:
                    raise Exception(f"HTTP error! status: {response.status} {await response.text()}")
                return await response.json()

    @Tool({
        "description": "Get OHLCV price of token",
        "parameters_schema": GetOhlcvParameters
    })
    async def get_ohlcv(self, parameters: dict):
        """Get OHLCV price of token.
        
        Args:
            parameters: Dictionary containing:
                - address: Token contract address
                - type: Time interval (1H, 4H, 12H, 1D, 1W, 1M)
                - time_from: Optional Unix timestamp
                - time_to: Optional Unix timestamp
                - chain: Chain name
        """
        # Filter out None values
        query_params = {k: v for k, v in parameters.items() if v is not None}
        query_str = "&".join(f"{k}={v}" for k, v in query_params.items())
        
        url = f"{self.base_url}/defi/ohlcv?{query_str}"
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers={"X-API-KEY": self.api_key}) as response:
                if not response.ok:
                    raise Exception(f"HTTP error! status: {response.status} {await response.text()}")
                return await response.json()

    @Tool({
        "description": "Get OHLCV price of pair",
        "parameters_schema": GetOhlcvPairParameters
    })
    async def get_ohlcv_pair(self, parameters: dict):
        """Get OHLCV price of pair.
        
        Args:
            parameters: Dictionary containing:
                - pair_address: Pair contract address
                - type: Time interval (1H, 4H, 12H, 1D, 1W, 1M)
                - limit: Optional number of data points
                - chain: Chain name
        """
        # Filter out None values
        query_params = {k: v for k, v in parameters.items() if v is not None}
        query_str = "&".join(f"{k}={v}" for k, v in query_params.items())
        
        url = f"{self.base_url}/defi/ohlcv/pair?{query_str}"
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers={"X-API-KEY": self.api_key}) as response:
                if not response.ok:
                    raise Exception(f"HTTP error! status: {response.status} {await response.text()}")
                return await response.json()

    @Tool({
        "description": "Get security information of a token",
        "parameters_schema": GetTokenSecurityParameters
    })
    async def get_token_security(self, parameters: dict):
        """Get security information of a token.
        
        Args:
            parameters: Dictionary containing:
                - address: Token contract address
                - chain: Chain name
        """
        address = parameters["address"]
        
        url = f"{self.base_url}/defi/token_security?address={address}"
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers={"X-API-KEY": self.api_key}) as response:
                if not response.ok:
                    raise Exception(f"HTTP error! status: {response.status} {await response.text()}")
                return await response.json()

    @Tool({
        "description": "Get trending tokens",
        "parameters_schema": GetTrendingTokensParameters
    })
    async def get_trending_tokens(self, parameters: dict):
        """Get trending tokens.
        
        Args:
            parameters: Dictionary containing:
                - chain: Chain name
                - sort_by: Sort field (rank, volume24hUSD, liquidity)
                - sort_type: Sort direction (asc, desc)
                - offset: Optional pagination offset
                - limit: Optional number of results
        """
        # Filter out None values
        query_params = {k: v for k, v in parameters.items() if v is not None}
        query_str = "&".join(f"{k}={v}" for k, v in query_params.items())
        
        url = f"{self.base_url}/defi/trending_tokens?{query_str}"
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers={"X-API-KEY": self.api_key}) as response:
                if not response.ok:
                    raise Exception(f"HTTP error! status: {response.status} {await response.text()}")
                return await response.json()

    @Tool({
        "description": "Search for a token",
        "parameters_schema": SearchTokenParameters
    })
    async def search_token(self, parameters: dict):
        """Search for a token.
        
        Args:
            parameters: Dictionary containing:
                - keyword: Search query
                - chain: Chain name
                - sort_by: Sort field (e.g., fdv, marketcap, liquidity)
                - sort_type: Sort direction (asc, desc)
                - verify_token: Optional verification status filter
                - markets: Optional list of market sources
                - offset: Optional pagination offset
                - limit: Optional number of results
        """
        # Filter out None values
        query_params = {k: v for k, v in parameters.items() if v is not None}
        
        # Handle markets parameter specially if it exists
        if "markets" in query_params and query_params["markets"]:
            query_params["markets"] = ",".join(query_params["markets"])
        
        query_str = "&".join(f"{k}={v}" for k, v in query_params.items())
        
        url = f"{self.base_url}/defi/v3/search?{query_str}"
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, headers={"X-API-KEY": self.api_key}) as response:
                if not response.ok:
                    raise Exception(f"HTTP error! status: {response.status} {await response.text()}")
                return await response.json()
