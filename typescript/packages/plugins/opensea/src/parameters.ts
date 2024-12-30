import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";

export class GetNftCollectionStatisticsParametersSchema extends createToolParameters(
    z.object({
        collectionSlug: z.string(),
    }),
) {}

export const GetNftCollectionStatisticsResponseSchema = z.array(
    z.object({
        total: z.object({
          volume: z.number(),
          sales: z.number(),
          average_price: z.number(),
          num_owners: z.number(),
          market_cap: z.number(),
          floor_price: z.number(),
          floor_price_symbol: z.string(),
        }),
        intervals: z.array(
          z.object({
            interval: z.string(),
            volume: z.number(),
            volume_diff: z.number(),
            volume_change: z.number(),
            sales: z.number(),
            sales_diff: z.number(),
            average_price: z.number(),
          })
        ),
      }),
);
