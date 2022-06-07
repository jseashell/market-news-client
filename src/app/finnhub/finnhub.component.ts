import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { webSocket } from 'rxjs/webSocket';
import { FinnhubWsDatum, FinnhubWsEvent } from './finnhub.interface';
import { mergeTradeArrays } from './merge-trade-arrays';

const stocks = ['AAPL', 'AMZN', 'FB', 'GOOG', 'MSFT', 'NFLX', 'TSLA'];

const coins = [
  'BINANCE:ADAUSDT',
  'BINANCE:BTCUSDT',
  'BINANCE:BNBUSDT',
  'BINANCE:DOGEUSDT',
  'BINANCE:ETHUSDT',
  'BINANCE:LTCUSDT',
  'BINANCE:SHIBUSDT',
  'BINANCE:SOLUSDT',
  'BINANCE:TRXUSDT',
  'BINANCE:XRPUSDT',
];

@Component({
  selector: 'app-finnhub',
  templateUrl: './finnhub.component.html',
  styleUrls: ['./finnhub.component.scss'],
})
export class FinnhubComponent implements OnInit {
  newsData: FinnhubWsDatum[] = [];
  tradeData: FinnhubWsDatum[] = mergeTradeArrays(
    [], // no new stock data at initialization
    stocks.map((symbol) => ({ s: symbol }))
  );
  cryptoData: FinnhubWsDatum[] = mergeTradeArrays(
    [], // no new crypto data at initialization
    coins.map((coin) => ({ s: coin }))
  );

  ngOnInit(): void {
    const subject = webSocket(`wss://ws.finnhub.io?token=${environment.finnhub.token}`);

    // must Subject.subscribe() ...
    subject.subscribe((event: FinnhubWsEvent) => {
      this.handleEvent(event);
    });

    // ...before Subject.next(), or else subjects will just be added to a buffer and never published
    stocks.forEach((stock) => subject.next({ type: 'subscribe', symbol: stock }));
    coins.forEach((coin) => subject.next({ type: 'subscribe', symbol: coin }));
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
    this.tradeData = mergeTradeArrays(
      this.tradeData,
      data.filter((datum) => !datum.s.startsWith('BINANCE'))
    );
    this.cryptoData = mergeTradeArrays(
      this.cryptoData,
      data.filter((datum) => datum.s.startsWith('BINANCE'))
    );
  }

  private handleError(event: FinnhubWsEvent): void {
    console.error(event);
  }
}
