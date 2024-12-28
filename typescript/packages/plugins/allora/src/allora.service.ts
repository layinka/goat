import { Tool } from '@goat-sdk/core'
import { createToolParameters } from '@goat-sdk/core'
import { z } from 'zod'
import { AlloraAPIClient } from './api'

export class AlloraService {
    private readonly client: AlloraAPIClient

    constructor(apiKey: string) {
        this.client = new AlloraAPIClient(apiKey)
    }

    @Tool({
        description: 'Fetch a future price prediction for a crypto asset from Allora Network.  Specify 5 minutes from now `5m`, or 8 hours from now `8h`.',
    })
    async getPricePrediction(params: GetAlloraPricePredictionParams) {
        const { ticker, timeframe } = params
        const response = await this.client.fetchAlloraPricePrediction(ticker, timeframe)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        return await response.json()
    }
}

const alloraPricePredictionSchema = z.object({
    ticker: z.enum(['BTC', 'ETH']).describe('The ticker of the currency for which to fetch a price prediction.'),
    timeframe: z.enum(['5m', '8h']).describe('The timeframe for the prediction (currently, either "5m" or "8h").'),
})

type GetAlloraPricePredictionParams = z.infer<typeof alloraPricePredictionSchema>
