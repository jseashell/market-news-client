import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WatchlistComponent } from './watchlist.component';

@NgModule({
  declarations: [WatchlistComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgApexchartsModule],
  exports: [WatchlistComponent],
})
export class WatchlistModule {}
