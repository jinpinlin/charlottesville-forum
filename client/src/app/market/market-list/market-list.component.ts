import { Component, OnInit } from '@angular/core';
import { MarketEntry } from '../market-entry.model';

import * as sampleData1 from 'src/app/share/samples/166bfaabf1bc10df.json';
import * as sampleData2 from 'src/app/share/samples/166ca5af70615e18.json';
const MARKETENTRIES = [
  new MarketEntry(
    '\u5356',
    sampleData2.snippet,
    sampleData2.payload.headers[32].value,
    false,
    [
      'http://media.4rgos.it/i/Argos/5399785_R_Z001A?$Web$&$DefaultPDP570$'
    ],
    [
      {
        itemName: '\u81EA\u884C\u8F66',
        itemNum: 1,
        price: 55,
        image: 'https://img13.360buyimg.com/n1/jfs/t27568/266/313579453/435818/ba562940/5b8e2eefN8e950904.jpg'
      },
      {
        itemName: '\u81EA\u884C\u8F66',
        itemNum: 1,
        price: 55,
        image: 'https://img13.360buyimg.com/n1/jfs/t27568/266/313579453/435818/ba562940/5b8e2eefN8e950904.jpg'
      }
    ]
  ),
  new MarketEntry(
    'sell the pan',
    'I want to sell the pan, see the price and fig below',
    'Doug <mmagou2017@gmail.com>',
    true,
    [
      'http://pic.baike.soso.com/p/20140521/20140521204520-544920324.jpg'
    ],
    [
      {
        itemName: 'pan',
        itemNum: 1,
        price: 5,
        image: 'https://mail.google.com/mail/u/1?ui=2&ik=2957901240&attid=0.1.7.0.1&permmsgid=msg-f:1617215063408365338&th=1671808823ddcf1a&view=att&disp=safe&realattid=f_johydzw82'
      }
    ]
  ),
  new MarketEntry(
    sampleData1.payload.headers[32].value,
    sampleData1.snippet,
    sampleData1.payload.headers[33].value,
    true,
    [
      'http://pic.baike.soso.com/p/20140521/20140521204520-544920324.jpg'
    ],
    [
      {
        itemName: undefined,
        itemNum: undefined,
        price: undefined,
        image: 'http://pic.baike.soso.com/p/20140521/20140521204520-544920324.jpg'
      }
    ]
  ),
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
