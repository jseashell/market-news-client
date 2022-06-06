import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveMarketComponent } from './live-market.component';
import { SymbolPipe } from './symbol.pipe';

@NgModule({
  declarations: [LiveMarketComponent, SymbolPipe],
  imports: [CommonModule],
  exports: [LiveMarketComponent],
})
export class LiveMarketModule {}
