import { PluginBase } from '@goat-sdk/core'
import { AlloraService } from './allora.service'
import { PricePredictionTimeframes } from './types'

interface AlloraPluginOptions {
    apiKey: string
    network: 'mainnet' | 'testnet'
}

export class AlloraPlugin extends PluginBase {
    constructor({ apiKey }: AlloraPluginOptions) {
        super('allora', [ new AlloraService(apiKey) ])
    }

    supportsChain = () => true
}

export function allora(options: AlloraPluginOptions) {
    options.network = options.network || 'testnet'
    return new AlloraPlugin(options)
}

