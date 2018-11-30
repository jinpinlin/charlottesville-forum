import { Injectable } from '@angular/core';

import { MarketEntry } from '../models/market-entry.model';
import * as sampleData1 from '../samples/166bfaabf1bc10df.json';
import * as sampleData2 from '../samples/166ca5af70615e18.json';
import { Entry } from '../models/entry.model';

const MARKETENTRIES = [
  new MarketEntry(
    '0',
    sampleData2.payload.headers.find(x => x.name === 'Subject').value,
    sampleData2.snippet,
    sampleData2.payload.headers.find(x => x.name === 'From').value,
    'test1@test.com',
    'market',
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
    '1',
    'sell the pan',
    'I want to sell the pan, see the price and fig below',
    'Doug <mmagou2017@gmail.com>',
    'test2@test.com',
    'market',
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
    '2',
    sampleData1.payload.headers.find(x => x.name === 'Subject').value,
    sampleData1.snippet,
    sampleData1.payload.headers.find(x => x.name === 'From').value,
    'test3@test.com',
    'market',
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

@Injectable({
  providedIn: 'root'
})
export class DataService {

  MarketEntries: MarketEntry[] = MARKETENTRIES.filter( entry => entry.category === 'market');

  categories = ['market', 'renting', 'rides', 'others'];
  nego_options = [true, false];

  constructor() { }

  getMarketEntries(): MarketEntry[] {
    return this.MarketEntries;
  }

  getMarketEntry(id: string): MarketEntry {
    return this.MarketEntries.find(marketEntry => marketEntry.id === id);
  }

  addMarketEntry(marketEntry: MarketEntry) {
    marketEntry.id = (this.MarketEntries.length + 1).toString();
    this.MarketEntries.push(marketEntry);
  }

  addEntry(entry: Entry) {
    console.log(entry.category);
    switch (entry.category) {
      case 'market': this.addMarketEntry(entry);
    }
  }
}
