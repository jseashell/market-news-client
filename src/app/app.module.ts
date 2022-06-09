import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about/about.component';
import { AppHeaderModule } from './app-header/app-header.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { WatchlistModule } from './watchlist/watchlist.module';

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppHeaderModule, HomeModule, WatchlistModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
