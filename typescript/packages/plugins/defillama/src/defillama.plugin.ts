import {type Chain, PluginBase } from '@goat-sdk/core';
import { DefiLlamaService } from './defillama.service';
import { base, hardhat, optimism, sonic, sonicTestnet,celo, celoAlfajores } from 'viem/chains';


const supportedChains = [
  base,
  optimism,
  sonic, 
  sonicTestnet,
  celo, 
  celoAlfajores ,
  hardhat,

]

export class DefiLlamaPlugin extends PluginBase {
  constructor() {
    super('defillama', [new DefiLlamaService()]);
    
  }

  supportsChain(chain: Chain): boolean {
    
    return chain.type === "evm" && supportedChains.map(c=>c.id).some(ss=>ss==chain.id);
  }
  // supportsChain = () => true;
}

export function defillama() {
  return new DefiLlamaPlugin();
}
