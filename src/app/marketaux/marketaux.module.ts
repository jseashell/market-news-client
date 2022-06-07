import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketauxComponent } from './marketaux.component';
import { MarketauxService } from './marketaux.service';

@NgModule({
  declarations: [MarketauxComponent],
  imports: [CommonModule],
  providers: [MarketauxService],
  exports: [MarketauxComponent],
})
export class MarketauxModule {}
