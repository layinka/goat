import { z } from "zod";

/**
 * Base URLs for the CoinGecko API
 */
export const COINGECKO_API_BASE_URL = "https://api.coingecko.com/api/v3";
export const PRO_API_BASE_URL = "https://pro-api.coingecko.com/api/v3";

/**
 * Helper function to make requests to the CoinGecko API
 * @param endpointUrl - The full URL of the CoinGecko API endpoint
 * @param apiKey - The CoinGecko API key
 * @param options - Optional fetch options to merge with defaults
 * @param isPro - Whether to use the Pro API authentication header
 * @returns The parsed JSON response
 * @throws Error if the response is not OK
 */
export async function coingeckoRequest<T = unknown>(
    endpointUrl: string,
    apiKey: string,
    options: RequestInit = {},
    isPro = false,
): Promise<T> {
    const response = await fetch(endpointUrl, {
        ...options,
        headers: {
            ...options.headers,
            [isPro ? "x-cg-pro-api-key" : "x-cg-demo-api-key"]: apiKey,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

/**
 * Helper function to build a URL with query parameters
 * @param baseUrl - The base URL without query parameters
 * @param params - Object containing query parameters
 * @returns The full URL with encoded query parameters
 */
export function buildUrl(baseUrl: string, params: Record<string, string | boolean | number>): string {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined) {
            searchParams.append(key, value.toString());
        }
    }
    const queryString = searchParams.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
