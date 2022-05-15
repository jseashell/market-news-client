import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarketauxLatestNews } from './marketaux-latest-news.interface';

@Injectable({
  providedIn: 'root',
})
export class MarketauxService {
  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<MarketauxLatestNews> {
    // https://www.marketaux.com/documentation
    return this.http.get<MarketauxLatestNews>('https://api.marketaux.com/v1/news/all', {
      params: {
        api_token: 'mNWUFXRriPRsYar8VWTLHnHVxoUP5TCv0EIwHPBM',
        exchanges: 'NASDAQ,NYSE,DJI',
      },
    });
  }
}
