import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { environment } from '@env/environment';
import { webSocket } from 'rxjs/webSocket';
import { ResourceApiService } from '../@shared/services/resource-api/resource-api.service';
import { mergeTradeArrays } from './merge-trade-arrays';
import { FinnhubWsDatum, FinnhubWsEvent, Watchlist } from './watchlist.interface';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  watchlist: Watchlist;

  @ViewChildren('stockWatchlistCheckboxes') stockWatchlistCheckboxes: QueryList<HTMLInputElement>;
  @ViewChildren('coinWatchlistCheckboxes') coinWatchlistCheckboxes: QueryList<HTMLInputElement>;
  editMode = false;

  defaultStocks = [{ symbol: 'AAPL' }, { symbol: 'AMZN' }, { symbol: 'FB' }, { symbol: 'NFLX' }, { symbol: 'GOOG' }];
  tradeData: FinnhubWsDatum[] = mergeTradeArrays(
    [],
    this.defaultStocks.map((stock) => ({ s: stock.symbol }))
  );

  defaultCoins = [{ symbol: 'BINANCE:DOGEUSDT' }, { symbol: 'BINANCE:BTCUSDT' }, { symbol: 'BINANCE:ETHUSDT' }];
  cryptoData: FinnhubWsDatum[] = mergeTradeArrays(
    [],
    this.defaultCoins.map((coins) => ({ s: coins.symbol }))
  );

  constructor(private resourceApi: ResourceApiService) {}

  ngOnInit(): void {
    const subject = webSocket(`wss://ws.finnhub.io?token=${environment.finnhub.token}`);

    // must subscribe to the websocket in general before you can subscribe to symbols
    subject.subscribe((event: FinnhubWsEvent) => {
      this.handleEvent(event);
    });

    this.resourceApi.getWatchlist().subscribe((watchlist) => {
      console.dir(watchlist);
      this.watchlist = watchlist.data;

      let stocks = watchlist.data.stocks || this.defaultStocks;
      stocks.forEach((exchange) => subject.next({ type: 'subscribe', symbol: exchange.symbol }));

      let coins = watchlist.data.coins || this.defaultCoins;
      coins.forEach((coin) => subject.next({ type: 'subscribe', symbol: coin.symbol }));
    });
  }

  private handleEvent(event: FinnhubWsEvent): void {
    switch (event?.type) {
      case 'trade':
        this.handleTrade(event.data);
        break;
      case 'error':
        this.handleError(event);
        break;
      default:
        console.debug(`Unhandled Watchlist WS event type "${event.type}"`);
    }
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

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  updateWatchlist() {
    const symbols = {
      stocks: this.stockWatchlistCheckboxes.toArray().map((select) => ({ symbol: select.value })),
      coins: this.coinWatchlistCheckboxes.toArray().map((select) => ({ symbol: select.value })),
    };
    if (!this.watchlist) {
      this.resourceApi
        .createWatchlist({
          userId: 'example-id-000',
          ...symbols,
        })
        .subscribe((res) => console.dir('Created watchlist', res));
    } else {
      this.resourceApi.updateWatchlist(symbols).subscribe((res) => console.dir('Updated watchlist', res));
    }

    this.editMode = false;
  }
}
