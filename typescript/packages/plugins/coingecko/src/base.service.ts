import {
    GetCoinDataParameters,
    GetCoinPriceByContractAddressParameters,
    GetCoinPriceParameters,
    GetCoinsMarketsParameters,
    GetHistoricalDataParameters,
    GetOHLCParameters,
    GetOnchainSimplePriceParameters,
    GetSupportedCoinsParameters,
    GetTrendingCoinsParameters,
    SearchCoinsParameters,
} from "./parameters";

/**
 * Base class for CoinGecko services
 * Defines the common interface that both Common and Pro services must implement
 */
export abstract class CoinGeckoServiceBase {
    constructor(protected readonly apiKey: string) {}

    abstract getTrendingCoins(parameters: GetTrendingCoinsParameters): Promise<unknown>;
    abstract getCoinPrice(parameters: GetCoinPriceParameters): Promise<unknown>;
    abstract searchCoins(parameters: SearchCoinsParameters): Promise<unknown>;
    abstract getCoinPriceByContractAddress(parameters: GetCoinPriceByContractAddressParameters): Promise<unknown>;
    abstract getCoinData(parameters: GetCoinDataParameters): Promise<unknown>;
    abstract getSupportedCoins(parameters: GetSupportedCoinsParameters): Promise<unknown>;
    abstract getHistoricalData(parameters: GetHistoricalDataParameters): Promise<unknown>;
    abstract getOHLCData(parameters: GetOHLCParameters): Promise<unknown>;
    abstract getOnchainSimplePrice(parameters: GetOnchainSimplePriceParameters): Promise<unknown>;
    abstract getCoinsMarkets(parameters: GetCoinsMarketsParameters): Promise<unknown>;
}
