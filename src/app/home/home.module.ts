import { NgModule } from '@angular/core';
import { FinnhubModule } from '../finnhub/finnhub.module';
import { MarketauxModule } from '../marketaux/marketaux.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [FinnhubModule, MarketauxModule],
  exports: [HomeComponent],
})
export class HomeModule {}
