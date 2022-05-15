import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NewsFeedModule } from './news-feed/news-feed.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [NewsFeedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
