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

interface CandlesResponse {
  data: {
    o: number[];
    h: number[];
    l: number[];
    c: number[];
    v: number[];
  };
}
@Injectable({
  providedIn: 'root',
})
export class CandlestickChartService {
  private forceTwoDecimalPlaces = (value: number) => parseFloat(value.toFixed(2));

  constructor(private http: HttpClient) {}

  candles(params: CandlesQueryParams): Observable<Candles> {
    return this.http
      .get(`${environment.resourceApi.url}/candles`, {
        params: { ...params },
      })
      .pipe(
        map(
          (res: CandlesResponse): Candles => ({
            open: res.data.o.map(this.forceTwoDecimalPlaces),
            high: res.data.h.map(this.forceTwoDecimalPlaces),
            low: res.data.l.map(this.forceTwoDecimalPlaces),
            close: res.data.c.map(this.forceTwoDecimalPlaces),
            volume: res.data.v.map(this.forceTwoDecimalPlaces),
          })
        )
      );
  }
}
