import { FinnhubWsDatum } from './finnhub.interface';
import { mergeTradeArrays } from './merge-trade-arrays';

describe('mergeTradeArrays', () => {
  it('should merge stale data with new data', () => {
    const staleData: FinnhubWsDatum[] = [{ s: 'symbol-2' }, { s: 'symbol-1' }];
    const newData: FinnhubWsDatum[] = [{ s: 'symbol-3' }];

    const result = mergeTradeArrays(staleData, newData);

    expect(result).toStrictEqual([{ s: 'symbol-1' }, { s: 'symbol-2' }, { s: 'symbol-3' }]);
  });
});
