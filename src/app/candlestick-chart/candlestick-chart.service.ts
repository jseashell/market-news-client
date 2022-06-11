import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';
import { Candles } from './candles.interface';

export interface CandlesQueryParams {
  symbol: string;
  resolution: string; // TODO validate
  // Duration is represented by Unix timestamps
  from: string;
  to: string;
}

@Injectable({
  providedIn: 'root',
})
export class CandlestickChartService {
  constructor(private http: HttpClient) {}

  candles(params: CandlesQueryParams): Observable<Candles> {
    return this.http
      .get(`${environment.resourceApi.url}/candles`, {
        params: { ...params },
      })
      .pipe(
        map((res: any) => ({
          open: res.data.o,
          high: res.data.h,
          low: res.data.l,
          close: res.data.c,
          volume: res.data.v,
        }))
      );
  }
}
