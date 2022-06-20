import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketComponent } from './market.component';
import { MarketauxService } from './marketaux.service';

@NgModule({
  declarations: [MarketComponent],
  imports: [CommonModule],
  providers: [MarketauxService],
  exports: [MarketComponent],
})
export class MarketModule {}
