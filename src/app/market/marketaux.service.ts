import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { MarketauxLatestNews } from './marketaux.interface';

@Injectable({
  providedIn: 'root',
})
export class MarketauxService {
  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<MarketauxLatestNews> {
    // https://www.marketaux.com/documentation
    return this.http.get<MarketauxLatestNews>(environment.marketaux.url, {
      params: {
        api_token: environment.marketaux.token,
        exchanges: 'NASDAQ,NYSE,DJI',
      },
    });
  }
}
