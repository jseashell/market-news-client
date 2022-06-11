import { Component, OnInit, ViewChild } from '@angular/core';

import { ApexOptions, ChartComponent } from 'ng-apexcharts';
import { map } from 'rxjs';
import { Candles } from './candles.interface';
import { CandlestickChartService } from './candlestick-chart.service';
import { Series } from './series.type';

@Component({
  selector: 'app-candlestick-chart',
  templateUrl: './candlestick-chart.component.html',
  styleUrls: ['./candlestick-chart.component.scss'],
})
export class CandlestickChartComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ApexOptions>;
  symbol = 'AAPL';
  resolution = 15; // seconds // TODO Add support for D, W, M
  from = 1654866000;
  to = 1654891200;

  constructor(private service: CandlestickChartService) {}

  ngOnInit(): void {
    const params = {
      symbol: this.symbol,
      resolution: this.resolution.toString(),
      from: this.from.toString(),
      to: this.to.toString(),
    };

    this.service
      .candles(params)
      .pipe(
        map((candles: Candles) => {
          return candles.open.map((open, index) => {
            const millis = this.from * 1000 + index * this.resolution * 60000;
            return {
              x: new Date(millis),
              y: [open, candles.high[index], candles.low[index], candles.close[index]],
            };
          });
        })
      )
      .subscribe((series: Series) => {
        if (series) {
          this.chartOptions = {
            series: [
              {
                data: series,
              },
            ],
            chart: {
              type: 'candlestick',
            },
            theme: {
              mode: 'dark',
            },
            title: {
              text: this.symbol,
              align: 'left',
            },
            xaxis: {
              type: 'datetime',
              labels: {
                datetimeUTC: false, // show the chart in the local time
                datetimeFormatter: {
                  hour: 'h:mm',
                },
              },
            },
            yaxis: {
              tooltip: {
                enabled: true,
              },
              labels: {
                formatter: (val) => '$' + val,
              },
            },
            tooltip: {
              theme: 'dark',
            },
          };
        }
      });
  }

  public generateDayWiseTimeSeries(baseval, count, yrange) {
    console.log('in daywise time series');
    var i = 0;
    var series = [];
    while (i < count) {
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
