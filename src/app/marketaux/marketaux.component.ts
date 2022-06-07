import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';
import { marketauxLatestNews } from 'src/mock-data/news-feed-items.mock';
import { Datum, MarketauxItem, MarketauxLatestNews } from './marketaux.interface';
import { MarketauxService } from './marketaux.service';

@Component({
  selector: 'app-marketaux',
  templateUrl: './marketaux.component.html',
  styleUrls: ['./marketaux.component.scss'],
})
export class MarketauxComponent implements OnInit {
  newsFeedItems: MarketauxItem[];

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
            } as MarketauxItem;
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
