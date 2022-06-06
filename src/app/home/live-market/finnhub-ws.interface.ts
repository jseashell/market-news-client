export interface FinnhubWsEvent {
  data: FinnhubWsDatum[];
  type: 'message' | 'news' | 'ping' | 'error';
}

export interface FinnhubWsDatum {
  p: number;
  s: string;
  t: number;
  v: number;
}
