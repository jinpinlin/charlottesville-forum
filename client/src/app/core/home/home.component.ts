import { Component, OnInit } from '@angular/core';
import { MarketEntry } from 'src/app/models/market-entry.model';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';
import { RentingEntry } from 'src/app/models/renting-entry.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  marketEntries: MarketEntry[];
  rentingEntries: RentingEntry[];
  n = 1;

  subscriptionMarketEntries: Subscription;
  constructor(private dataSerive: DataService) { }
  ngOnInit() {
    this.subscriptionMarketEntries = this.dataSerive.getMarketEntries()
      .subscribe(
        marketEntries =>
          this.marketEntries = marketEntries.slice(0, this.n));
  }
}

