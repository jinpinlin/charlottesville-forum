import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { MarketEntry } from '../../models/market-entry.model';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.css']
})
export class MarketDetailComponent implements OnInit {

  marketEntry: MarketEntry;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.dataService.getMarketEntry(params['id'])
        .then(marketEntry => {
          console.log(marketEntry.imagePaths);
          // if (marketEntry.imagePaths.length !== 0) { marketEntry.imagePaths = JSON.parse(marketEntry.imagePaths[0]); }
          console.log(marketEntry.imagePaths);
          this.marketEntry = marketEntry;
        });
    }
    );
  }

}
