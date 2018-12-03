import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { MarketListComponent } from './market/market-list/market-list.component';
import { RentingListComponent } from './renting/renting-list/renting-list.component';
import { RentingEntryComponent } from './renting/renting-entry/renting-entry.component';
import { RidesListComponent } from './rides/rides-list/rides-list.component';
import { RidesEntryComponent } from './rides/rides-entry/rides-entry.component';
import { RidesComponent } from './rides/rides.component';
import { RentingComponent } from './renting/renting.component';
import { MarketComponent } from './market/market.component';
import { OthersComponent } from './others/others.component';
import { AboutComponent } from './about/about.component';
import { MarketDetailComponent } from './market/market-detail/market-detail.component';
import { MarketEditComponent } from './market/market-edit/market-edit.component';
import { NewPostComponent } from './core/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MarketComponent,
    MarketListComponent,
    RentingComponent,
    RentingListComponent,
    RentingEntryComponent,
    RidesComponent,
    RidesListComponent,
    RidesEntryComponent,
    OthersComponent,
    AboutComponent,
    MarketDetailComponent,
    MarketEditComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
