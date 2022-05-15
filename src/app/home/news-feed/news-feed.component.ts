import { Component, OnInit } from '@angular/core';
import { marketauxLatestNews } from '../../../mock-data/news-feed-items.mock';
import { Datum, MarketauxLatestNews, MarketauxService } from '@services';
import { map, of } from 'rxjs';
import { NewsFeedItem } from './news-feed-item.interface';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  newsFeedItems: NewsFeedItem[];

  constructor(private _marketauxService: MarketauxService) {} // ts-ignore

  ngOnInit(): void {
    // this.marketauxService.getLatestNews().subscribe()
    of(marketauxLatestNews)
      .pipe(
        map((marketauxLatestNews: MarketauxLatestNews) => marketauxLatestNews.data),
        map((data: Datum[]) => {
          return data.map((datum: Datum) => {
            return {
              ...datum,
              keywords: datum.keywords
                .split(',')
                .map((s) => s.trim())
                .filter(this.removeAllLowercase)
                .filter(this.denyList),
            } as NewsFeedItem;
          });
        })
      )
      .subscribe((newsFeedItems) => {
        this.newsFeedItems = newsFeedItems;
      });
  }

  private removeAllLowercase = (keyword: string) => {
    if (keyword.toLowerCase() === keyword) {
      return false;
    }

    return true;
  };

  private denyList = (keyword: string) => {
    const denyWords = ['Put', 'Call', 'Article', 'News'];
    for (let deny of denyWords) {
      if (deny.toLowerCase() == keyword.toLowerCase()) {
        return false;
      }
    }

    return true;
  };
}
