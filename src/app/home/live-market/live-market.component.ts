import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { webSocket } from 'rxjs/webSocket';
import { FinnhubWsDatum, FinnhubWsEvent } from './finnhub-ws.interface';

@Component({
  selector: 'app-live-market',
  templateUrl: './live-market.component.html',
  styleUrls: ['./live-market.component.scss'],
})
export class LiveMarketComponent implements OnInit {
  newsData: FinnhubWsDatum[];
  tradeData: FinnhubWsDatum[];

  ngOnInit(): void {
    const subject = webSocket(`wss://ws.finnhub.io?token=${environment.finnhub.token}`);

    subject.subscribe((event: FinnhubWsEvent) => {
      switch (event?.type) {
        case 'trade':
          this.handleTrade(event.data);
          break;
        case 'news':
          this.handleNews(event.data);
          break;
        case 'error':
          this.handleError(event);
          break;
        default:
          console.debug(`Unhandled Finnhub WS event type "${event.type}"`);
      }
    });

    subject.next({ type: 'subscribe', symbol: 'AAPL' });
    subject.next({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' });
    subject.next({ type: 'subscribe', symbol: 'IC MARKETS:1' });
  }

  private handleNews(data: FinnhubWsDatum[]): void {
    this.newsData = data;
  }

  private handleTrade(data: FinnhubWsDatum[]): void {
    this.tradeData = data;
  }

  private handleError(event: FinnhubWsEvent): void {
    console.error(event);
  }
}
