import { Injectable } from '@angular/core';

import { MarketEntry } from '../models/market-entry.model';
import { Entry } from '../models/entry.model';

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
