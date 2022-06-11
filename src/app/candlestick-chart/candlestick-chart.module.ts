import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CandlestickChartComponent } from './candlestick-chart.component';
import { CandlestickChartService } from './candlestick-chart.service';

import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [CandlestickChartComponent],
  imports: [CommonModule, NgApexchartsModule],
  providers: [CandlestickChartService],
  exports: [CandlestickChartComponent],
})
export class CandlestickChartModule {}
