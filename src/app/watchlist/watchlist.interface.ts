export interface WatchlistResponse {
  message: string;
  data: Watchlist;
}

export interface Watchlist {
  userId: string;
  stocks: {
    symbol: string;
  }[];
  coins: {
    symbol: string;
  }[];
}

// https://finnhub.io/docs/api/websocket-trades
export interface FinnhubWsEvent {
  data?: FinnhubWsDatum[];
  type?: 'trade' | 'news' | 'ping' | 'error';
}

export interface FinnhubWsDatum {
  p?: number; // price
  s?: string; // symbol
  t?: number; // timestamp (millis)
  v?: number; // volume
  c?: any; // conditions
}
