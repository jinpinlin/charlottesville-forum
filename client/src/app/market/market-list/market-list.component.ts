import { Component, OnInit } from '@angular/core';
import { MarketEntry } from '../../models/market-entry.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})

export class MarketListComponent implements OnInit {
  marketEntries: MarketEntry[];
  constructor(private dataSerive: DataService) {}
  ngOnInit() {
    this.marketEntries = this.dataSerive.getMarketEntries();
  }
}
