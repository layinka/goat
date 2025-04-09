import { DEX_CONFIGS, DexAddresses } from "../config/dex.config";

export function getDexConfig(chainId: number, dexName: string): DexAddresses {
    const chainConfig = DEX_CONFIGS[chainId];
    if (!chainConfig) {
        throw new Error(`Chain ID ${chainId} not supported`);
    }

    const dexConfig = chainConfig[dexName.toLowerCase()];
    if (!dexConfig) {
        throw new Error(`DEX ${dexName} not found on chain ${chainId}`);
    }

    return dexConfig;
}
export function isValidDex(chainId: number, dexName: string): boolean {
    try {
        getDexConfig(chainId, dexName);
        return true;
    } catch {
        return false;
    }
}

export function getSupportedDexes(chainId: number): string[] {
    const chainConfig = DEX_CONFIGS[chainId];
    if (!chainConfig) {
        return [];
    }
    return Object.keys(chainConfig);
}

export function getSupportedChains(): number[] {
    return Object.keys(DEX_CONFIGS).map(Number);
}
