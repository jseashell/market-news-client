import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class FinnhubService {
  constructor(private http: HttpClient) {}

  getSymbols() {
    return this.http.get(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${environment.finnhub.token}`);
  }
}
