import { FinnhubWsDatum } from './finnhub.interface';

/**
 * New data from the Finnhub WS shows trades/second. There can be multiple trades for a symbol,
 * resulting in duplicates that must be filtered
 *
 * @param stale
 * @param toMerge
 * @returns
 */
export function mergeTradeArrays(stale: FinnhubWsDatum[], toMerge: FinnhubWsDatum[]): FinnhubWsDatum[] {
  stale.forEach((staleTrade) => {
    if (toMerge.filter((trade) => trade.s == staleTrade.s).length == 0) {
      toMerge.push(staleTrade);
    }
  });

  return toMerge.filter(removeDuplicates).sort(bySymbolDesc);
}

const removeDuplicates = (trade: FinnhubWsDatum, index: number, self: FinnhubWsDatum[]) =>
  index === self.findIndex((t) => t.s === trade.s);

const bySymbolDesc = (a: FinnhubWsDatum, b: FinnhubWsDatum) => a.s.localeCompare(b.s);
