import { Component, OnInit } from '@angular/core';
import { MarketEntry } from '../../models/market-entry.model';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})

export class MarketListComponent implements OnInit {
  marketEntries: MarketEntry[];
  p = 1;

  subscriptionMarketEntries: Subscription;
  constructor(private dataSerive: DataService) {}
  ngOnInit() {
    this.subscriptionMarketEntries = this.dataSerive.getMarketEntries()
                                                    .subscribe(
                                                      marketEntries =>
                                                      this.marketEntries = marketEntries);
  }
}
