import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { webSocket } from 'rxjs/webSocket';
import { FinnhubWsDatum, FinnhubWsEvent } from './finnhub-ws.interface';

const symbols = [
  'AAPL',
  'AMZN',
  'GOOG',
  'META',
  'MSFT',
  'NFLX',
  'TSLA',
  'BINANCE:BTCUSDT',
  'BINANCE:ETHUSDT',
  'BINANCE:DOGEUSDT',
];

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

    // must Subject.subscribe() ...
    subject.subscribe((event: FinnhubWsEvent) => {
      this.handleEvent(event);
    });

    // ...before Subject.next(), or else subjects will just be added to a buffer and never published
    symbols.forEach((symbol) => subject.next({ type: 'subscribe', symbol: symbol }));
  }

  private handleEvent(event: FinnhubWsEvent): void {
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
  }

  private handleNews(data: FinnhubWsDatum[]): void {
    this.newsData = data;
  }

  private handleTrade(data: FinnhubWsDatum[]): void {
    symbols.forEach((symbol: string) => {
      if (!this.tradeData.filter((trade) => trade.s === symbol)[0]) {
        this.tradeData.push({
          s: symbol,
          p: 0,
          v: 0,
          t: new Date().getMilliseconds(),
        } as FinnhubWsDatum);
      }
    });

    this.tradeData = [
      ...(this.tradeData || []),
      ...data?.map((datum) => {
        if (datum.s.startsWith('BINANCE:')) {
          datum.s = datum.s.split(':')[1];
        }
        return datum;
      }),
    ].sort((a: FinnhubWsDatum, b: FinnhubWsDatum) => a.s.localeCompare(b.s));
  }

  private handleError(event: FinnhubWsEvent): void {
    console.error(event);
  }
}
