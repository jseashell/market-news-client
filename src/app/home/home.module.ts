import { NgModule } from '@angular/core';
import { MarketauxModule } from '../marketaux/marketaux.module';
import { WatchlistModule } from '../watchlist/watchlist.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [WatchlistModule, MarketauxModule],
  exports: [HomeComponent],
})
export class HomeModule {}
