import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CandlestickChartModule } from '@components';
import { PaperTradingComponent } from './paper-trading.component';
import { WatchlistModule } from './watchlist/watchlist.module';

@NgModule({
  declarations: [PaperTradingComponent],
  imports: [CommonModule, CandlestickChartModule, WatchlistModule],
  exports: [PaperTradingComponent],
})
export class PaperTradingModule {}
