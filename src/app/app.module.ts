import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedServicesModule } from './@shared/services/shared-services.module';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { MarketModule } from './market/market.module';
import { PaperTradingModule } from './paper-trading/paper-trading.module';
import { SignInModule } from './sign-in/sign-in.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AboutModule,
    AppRoutingModule,
    HeaderModule,
    BrowserModule,
    HomeModule,
    HttpClientModule,
    MarketModule,
    PaperTradingModule,
    SharedServicesModule,
    SignInModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
