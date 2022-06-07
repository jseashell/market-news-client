import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { webSocket } from 'rxjs/webSocket';
import { FinnhubWsDatum, FinnhubWsEvent } from './finnhub.interface';
import { mergeTradeArrays } from './merge-trade-arrays';

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
  selector: 'app-finnhub',
  templateUrl: './finnhub.component.html',
  styleUrls: ['./finnhub.component.scss'],
})
export class FinnhubComponent implements OnInit {
  newsData: FinnhubWsDatum[] = [];
  tradeData: FinnhubWsDatum[] = [];

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
    this.tradeData = mergeTradeArrays(this.tradeData, data).map((datum) => {
      if (datum.s.startsWith('BINANCE:')) {
        datum.s = datum.s.split(':')[1];
      }
      return datum;
    });
  }

  private handleError(event: FinnhubWsEvent): void {
    console.error(event);
  }
}
