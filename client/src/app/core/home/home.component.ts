import { Component, OnInit } from '@angular/core';
import { MarketEntry } from 'src/app/models/market-entry.model';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { RentingEntry } from 'src/app/models/renting-entry.model';
import { CognitoUtil } from 'src/app/auth/service/cognito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marketEntries: MarketEntry[];
  rentingEntries: RentingEntry[];
  ridesEntries: MarketEntry[];
  othersEntries: RentingEntry[];
  n = 1;

  subscriptionMarketEntries: Subscription;
  subscriptionRentingEntries: Subscription;
  subscriptionRidesEntries: Subscription;
  subscriptionOthersEntries: Subscription;

  constructor(private dataSerive: DataService, private cognitoUtil: CognitoUtil) { }
  ngOnInit() {
    this.subscriptionMarketEntries = this.dataSerive.getMarketEntries()
      .subscribe(
        marketEntries =>
          this.marketEntries = marketEntries.slice(0, this.n));

    this.subscriptionRentingEntries = this.dataSerive.getRentingEntries()
      .subscribe(
        rentingEntries =>
          this.rentingEntries = rentingEntries.slice(0, this.n));
    this.subscriptionRidesEntries = this.dataSerive.getRidesEntries()
      .subscribe(
        ridesEntries =>
          this.ridesEntries = ridesEntries.slice(0, this.n));
    this.subscriptionOthersEntries = this.dataSerive.getOthersEntries()
      .subscribe(
        othersEntries =>
          this.othersEntries = othersEntries.slice(0, this.n));
  }
}

