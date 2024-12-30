import { Tool } from "@goat-sdk/core";
import { z } from "zod";
import { GetNftCollectionStatisticsParametersSchema, GetNftCollectionStatisticsResponseSchema } from "./parameters";

export class OpenseaService {

    constructor(private readonly apiKey: string) {}

    @Tool({
        description: "Get NFT collection statistics ",
    })
    async getNftCollectionStatistics(parameters: GetNftCollectionStatisticsParametersSchema) {
        let nftCollectionStatistics: z.infer<typeof GetNftCollectionStatisticsResponseSchema>;
        try {
            const response = await fetch(
                `https://api.opensea.io/api/v2/collections/${parameters.collectionSlug}/stats`,
                {
                    headers: {
                        "accept": "application/json",
                        "x-api-key": this.apiKey,
                    },
                },
            );

            nftCollectionStatistics = (await response.json()) as z.infer<typeof GetNftCollectionStatisticsResponseSchema>;
        } catch (error) {
            throw new Error(`Failed to get NFT collection statistics: ${error}`);
        }

        return nftCollectionStatistics;
    }
}
