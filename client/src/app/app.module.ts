import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { MarketListComponent } from './market/market-list/market-list.component';
import { MarketEntryComponent } from './market/market-entry/market-entry.component';
import { RentingListComponent } from './renting/renting-list/renting-list.component';
import { RentingEntryComponent } from './renting/renting-entry/renting-entry.component';
import { RidersListComponent } from './rides/riders-list/riders-list.component';
import { RidersEntryComponent } from './rides/riders-entry/riders-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MarketListComponent,
    MarketEntryComponent,
    RentingListComponent,
    RentingEntryComponent,
    RidersListComponent,
    RidersEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
