import { FinnhubWsDatum } from './finnhub.interface';
import { mergeTradeArrays } from './merge-trade-arrays';

describe('mergeTradeArrays', () => {
  it('should merge stale data with new data', () => {
    const expected = [{ s: 'symbol-1' }, { s: 'symbol-2' }, { s: 'symbol-3' }, { s: 'symbol-4' }, { s: 'symbol-5' }];

    const staleData: FinnhubWsDatum[] = [...expected].splice(0, 2);

    const result = mergeTradeArrays(staleData, [
      { s: 'data_source:symbol-1' }, // coverage for data source prefix and duplicates
      { s: 'data_source:symbol-1' },
      { s: 'symbol-3' },
      { s: 'symbol-4' },
      { s: 'symbol-5' },
    ]);

    expect(result).toStrictEqual(expected);
  });
});
