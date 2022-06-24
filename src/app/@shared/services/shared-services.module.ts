import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FinnhubService } from './finnhub/finnhub.service';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [FinnhubService, UserService],
})
export class SharedServicesModule {}
