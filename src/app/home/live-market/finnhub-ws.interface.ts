export interface FinnhubWsEvent {
  data: FinnhubWsDatum[];
  type: 'message' | 'news' | 'ping';
}

export interface FinnhubWsDatum {
  p: number;
  s: string;
  t: number;
  v: number;
}
