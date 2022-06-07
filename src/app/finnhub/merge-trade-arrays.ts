import { FinnhubWsDatum } from './finnhub.interface';

export function mergeTradeArrays(stale: FinnhubWsDatum[], toMerge: FinnhubWsDatum[]): FinnhubWsDatum[] {
  stale.forEach((staleTrade) => {
    if (toMerge.filter((trade) => trade.s == staleTrade.s).length == 0) {
      toMerge.push(staleTrade);
    }
  });

  return toMerge.sort(bySymbolDesc);
}

function bySymbolDesc(a: FinnhubWsDatum, b: FinnhubWsDatum) {
  return a.s.localeCompare(b.s);
}
