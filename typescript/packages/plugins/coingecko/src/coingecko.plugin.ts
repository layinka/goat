import { PluginBase } from "@goat-sdk/core";
import { CommonService } from "./common.service";
import { ProService } from "./pro.service";
interface CoingeckoPluginOptions {
    apiKey: string;
    pro?: boolean;
}

export class CoinGeckoPlugin extends PluginBase {
    constructor({ apiKey, pro = false }: CoingeckoPluginOptions) {
        const services: CommonService[] = [new CommonService(apiKey)];
        if (pro) {
            services.push(new ProService(apiKey));
        }
        super("coingecko", services);
    }

    supportsChain = () => true;
}

export function coingecko(options: CoingeckoPluginOptions) {
    return new CoinGeckoPlugin(options);
}
