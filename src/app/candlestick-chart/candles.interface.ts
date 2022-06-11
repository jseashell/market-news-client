/**
 * OHLCV data represented as a series of parallel arrays
 *
 * For example, 3 candles are represented as
 * @example
 * {
 *   open: [123,123.5535,123.306393],
 *   high: [123.492,124.047714,123.799618572,124.35671685557399],
 *   low: [122.631,123.1828395,122.93647382099999],
 *   close: [123.2829,123.36816975,123.5899977039],
 *   volume: [63,35,9]
 * }
 */
export interface Candles {
  open: number[];
  high: number[];
  low: number[];
  close: number[];
  volume: number[];
}
