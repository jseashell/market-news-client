import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { LiveMarketComponent } from './live-market/live-market.component';
import { LiveMarketModule } from './live-market/live-market.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [LiveMarketModule, NewsFeedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
