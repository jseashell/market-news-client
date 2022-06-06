export interface FinnhubWsEvent {
  data: FinnhubWsDatum[];
  type: 'subscribe' | 'news';
}

export interface FinnhubWsDatum {
  p: number;
  s: string;
  t: number;
  v: number;
}
