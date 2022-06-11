import { FinnhubWsDatum } from './watchlist.interface';

/**
 * New data from the Watchlist WS shows trades/second. There can be multiple trades for a symbol,
 * resulting in duplicates that must be filtered
 *
 * @param stale
 * @param toMerge
 * @returns the merged array
 */
export function mergeTradeArrays(stale: FinnhubWsDatum[], toMerge: FinnhubWsDatum[]): FinnhubWsDatum[] {
  stale = [...(stale || [])]; // dereference the given arrays
  toMerge = [...toMerge];
  return toMerge
    .map(removeDataSourcePrefix)
    .map((trade) => {
      const index = stale.findIndex((staleTrade) => staleTrade.s === trade.s);
      if (index != undefined && index != null && index >= 0) {
        stale.splice(index, 1);
      }
      return trade;
    })
    .concat(stale)
    .filter(duplicates)
    .sort(bySymbolDesc);
}

const removeDataSourcePrefix = (datum: FinnhubWsDatum) => {
  if (datum.s.includes(':')) {
    datum.s = datum.s.split(':')[1];
  }
  return datum;
};

const duplicates = (trade: FinnhubWsDatum, index: number, self: FinnhubWsDatum[]) =>
  index === self.findIndex((t) => t.s === trade.s);

const bySymbolDesc = (a: FinnhubWsDatum, b: FinnhubWsDatum) => a.s.localeCompare(b.s);
