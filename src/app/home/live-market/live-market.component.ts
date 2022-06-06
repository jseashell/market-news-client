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
        case 'news':
          this.handleNews(ws.data);
          break;
        case 'subscribe':
          this.handleSubscribe(ws.data);
      }
    });
  }

  private handleNews(data: FinnhubWsDatum[]): void {
    console.log('FINNHUB', 'news received');
    this.newsData = data;
    console.dir(this.newsData);
  }

  private handleSubscribe(data: FinnhubWsDatum[]): void {
    console.log('FINNHUB', 'subscribe received');
    this.subscribeData = data;
    console.dir(this.subscribeData);
  }
}
