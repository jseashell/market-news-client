export interface MarketauxLatestNews {
  meta?: Meta;
  data: Datum[];
}

export interface Datum {
  uuid: string;
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language?: string;
  published_at: Date;
  source: string;
  relevance_score?: null;
  entities?: Entity[];
  similar?: Datum[];
}

export interface Entity {
  symbol: string;
  name: string;
  exchange: string;
  exchange_long: string;
  country: string;
  type: string;
  industry: string;
  match_score: number;
  sentiment_score: number;
  highlights: Highlight[];
}

export interface Highlight {
  highlight: string;
  sentiment: number;
  highlighted_in: string;
}

export interface Meta {
  found?: number;
  returned?: number;
  limit?: number;
  page?: number;
}
