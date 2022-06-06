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
  subscribeData: FinnhubWsDatum[];

  ngOnInit(): void {
    const subject = webSocket(`wss://ws.finnhub.io?token=${environment.finnhub.token}`);

    subject.subscribe((ws: FinnhubWsEvent) => {
      switch (ws?.type) {
        case 'ping':
          this.handlePing();
          break;
        case 'message':
          this.handleMessage(ws.data);
          break;
        case 'news':
          this.handleNews(ws.data);
          break;
        default:
          throw new Error(`Unhandled Finnhub WS event type "${ws.type}"`);
      }
    });

    subject.next(JSON.stringify({ type: 'subscribe', symbol: 'AAPL' }));
    subject.next(JSON.stringify({ type: 'subscribe', symbol: 'BINANCE:BTCUSDT' }));
    subject.next(JSON.stringify({ type: 'subscribe', symbol: 'IC MARKETS:1' }));
  }

  private handlePing(): void {
    console.debug('Finnhub ping');
  }

  private handleNews(data: FinnhubWsDatum[]): void {
    console.log('FINNHUB', 'news received');
    this.newsData = data;
    console.dir(this.newsData);
  }

  private handleMessage(data: FinnhubWsDatum[]): void {
    console.log('FINNHUB', 'message received');
    this.subscribeData = data;
    console.dir(this.subscribeData);
  }
}
