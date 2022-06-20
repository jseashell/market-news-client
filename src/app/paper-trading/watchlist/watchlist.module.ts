import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WatchlistComponent } from './watchlist.component';

@NgModule({
  declarations: [WatchlistComponent],
  imports: [CommonModule],
  exports: [WatchlistComponent],
})
export class WatchlistModule {}
