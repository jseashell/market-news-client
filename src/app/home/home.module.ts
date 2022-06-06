import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LiveMarketModule } from './live-market/live-market.module';
import { NewsFeedModule } from './news-feed/news-feed.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [LiveMarketModule, NewsFeedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
