import { Component, OnInit } from '@angular/core';
import { MarketEntry } from '../market-entry.model';

const MARKETENTRIES = [
  new MarketEntry(
    'sell lamp',
    'sell this second-hand lamp',
    [
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
    ],
    [
      {
        itemName: 'lamp',
        itemNum: 1
      },
      {
        itemName: 'second lamp',
        itemNum: 2
      }
    ]
  ),
  new MarketEntry(
    'sell cellphone',
    'sell this second-hand cellphone',
    [
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
    ],
    [
      {
        itemName: 'cellphone',
        itemNum: 1
      },
      {
        itemName: 'second cellphone',
        itemNum: 2
      }
    ]
  )
];

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.css']
})

export class MarketListComponent implements OnInit {
  // constructor(private MarketItems: MarketItem[]) { }
  public MarketEntries;
  constructor() {}
  ngOnInit() {
    this.MarketEntries = MARKETENTRIES;
  }

  onGetEntry(i: number) {
    return this.MarketEntries[i];
  }
}
