import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/share/data.service';
import { ActivatedRoute } from '@angular/router';
import { MarketEntry } from '../market-entry.model';

@Component({
  selector: 'app-market-detail',
  templateUrl: './market-detail.component.html',
  styleUrls: ['./market-detail.component.css']
})
export class MarketDetailComponent implements OnInit {

  marketEntry: MarketEntry;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>
      this.marketEntry = this.dataService.getMarketEntry(params['id'])
    );
  }

}
