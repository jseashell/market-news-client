import { Datum, Entity } from '@services';

export interface NewsFeedItem {
  uuid: string;
  title: string;
  description: string;
  keywords: string[];
  snippet: string;
  url: string;
  image_url: string;
  published_at: Date;
  source: string;
  relevance_score?: null;
  entities: Entity[];
  similar: Datum[];
}
