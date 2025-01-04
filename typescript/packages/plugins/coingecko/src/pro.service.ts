import { Tool } from "@goat-sdk/core";
import { CoinGeckoServiceBase } from "./base.service";
import { CommonService } from "./common.service";
import {
    GetCoinDataParameters,
    GetCoinPriceByContractAddressParameters,
    GetCoinPriceParameters,
    GetCoinsMarketsParameters,
    GetHistoricalDataParameters,
    GetOHLCParameters,
    GetOnchainSimplePriceParameters,
    GetPoolAddressMultiParameters,
    GetPoolAddressParameters,
    GetPoolTokenInfoParameters,
    GetSupportedCoinsParameters,
    GetTokenInfoParameters,
    GetTopGainersLosersParameters,
    GetTrendingCoinsParameters,
    GetTrendingPoolsListParameters,
    GetTrendingPoolsNetworkParameters,
    SearchCoinsParameters,
} from "./parameters";
import { PRO_API_BASE_URL, buildUrl, coingeckoRequest } from "./request";

export class ProService extends CommonService {
    // Implement common methods with Pro API
    async getTrendingCoins(parameters: GetTrendingCoinsParameters) {
        return coingeckoRequest(buildUrl(`${PRO_API_BASE_URL}/search/trending`, {}), this.apiKey, {}, true);
    }

    async getCoinPrice(parameters: GetCoinPriceParameters) {
        const { coinId, vsCurrency, includeMarketCap, include24hrVol, include24hrChange, includeLastUpdatedAt } =
            parameters;
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/simple/price`, {
                ids: coinId,
                vs_currencies: vsCurrency,
                include_market_cap: includeMarketCap,
                include_24hr_vol: include24hrVol,
                include_24hr_change: include24hrChange,
                include_last_updated_at: includeLastUpdatedAt,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async searchCoins(parameters: SearchCoinsParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/search`, {
                query: parameters.query,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async getCoinPriceByContractAddress(parameters: GetCoinPriceByContractAddressParameters) {
        const {
            id,
            contractAddresses,
            vsCurrency,
            includeMarketCap,
            include24hrVol,
            include24hrChange,
            includeLastUpdatedAt,
        } = parameters;
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/simple/token_price/${id}`, {
                contract_addresses: contractAddresses.join(","),
                vs_currencies: vsCurrency,
                include_market_cap: includeMarketCap,
                include_24hr_vol: include24hrVol,
                include_24hr_change: include24hrChange,
                include_last_updated_at: includeLastUpdatedAt,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async getCoinData(parameters: GetCoinDataParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/coins/${parameters.id}`, {
                localization: parameters.localization,
                tickers: parameters.tickers,
                market_data: parameters.marketData,
                community_data: parameters.communityData,
                developer_data: parameters.developerData,
                sparkline: parameters.sparkline,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async getSupportedCoins(parameters: GetSupportedCoinsParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/coins/list`, {
                include_platform: parameters.includePlatform,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async getHistoricalData(parameters: GetHistoricalDataParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/coins/${parameters.id}/history`, {
                date: parameters.date,
                localization: parameters.localization,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async getOHLCData(parameters: GetOHLCParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/coins/${parameters.id}/ohlc`, {
                vs_currency: parameters.vsCurrency,
                days: parameters.days,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async getOnchainSimplePrice(parameters: GetOnchainSimplePriceParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/simple/token_price/${parameters.network}`, {
                contract_addresses: parameters.contractAddress,
                vs_currencies: parameters.vsCurrency,
                include_24hr_change: parameters.include24hrChange,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    async getCoinsMarkets(parameters: GetCoinsMarketsParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/coins/markets`, {
                vs_currency: parameters.vsCurrency,
                category: parameters.category,
                order: parameters.order,
                per_page: parameters.perPage,
                page: parameters.page,
                sparkline: parameters.sparkline,
            }),
            this.apiKey,
            {},
            true,
        );
    }
    @Tool({
        description: "Get pool metadata from GeckoTerminal",
    })
    async getPoolAddress(parameters: GetPoolAddressParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/onchain/networks/${parameters.network}/pool_address`, {
                address: parameters.address,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    @Tool({
        description: "Get multiple pool metadata from GeckoTerminal",
    })
    async getPoolAddressMulti(parameters: GetPoolAddressMultiParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/onchain/networks/${parameters.network}/pool_address/multi`, {
                addresses: parameters.addresses.join(","),
            }),
            this.apiKey,
            {},
            true,
        );
    }

    @Tool({
        description: "Get trending pools by network from GeckoTerminal",
    })
    async getTrendingPoolsByNetwork(parameters: GetTrendingPoolsNetworkParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/onchain/networks/${parameters.network}/trending_pools`, {
                limit: parameters.limit,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    @Tool({
        description: "Get all trending pools from GeckoTerminal",
    })
    async getTrendingPoolsList(parameters: GetTrendingPoolsListParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/onchain/trending_pools`, {
                limit: parameters.limit,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    @Tool({
        description: "Get top gainers and losers from CoinGecko Pro",
    })
    async getTopGainersLosers(parameters: GetTopGainersLosersParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/coins/top_gainers_losers`, {
                vs_currency: parameters.vsCurrency,
                duration: parameters.duration,
                top_tokens: parameters.topMoversCount,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    @Tool({
        description: "Get token metadata from GeckoTerminal",
    })
    async getTokenInfo(parameters: GetTokenInfoParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/onchain/networks/${parameters.network}/token_info`, {
                contract_address: parameters.contractAddress,
            }),
            this.apiKey,
            {},
            true,
        );
    }

    @Tool({
        description: "Get pool token metadata from GeckoTerminal",
    })
    async getPoolTokenInfo(parameters: GetPoolTokenInfoParameters) {
        return coingeckoRequest(
            buildUrl(`${PRO_API_BASE_URL}/onchain/networks/${parameters.network}/pool_token_info`, {
                contract_address: parameters.contractAddress,
            }),
            this.apiKey,
            {},
            true,
        );
    }
}
