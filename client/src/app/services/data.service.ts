import { Injectable } from '@angular/core';

import { MarketEntry } from '../models/market-entry.model';
import { Entry } from '../models/entry.model';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private marketEntries = new BehaviorSubject<MarketEntry[]>([]);
  categories = ['market', 'renting', 'rides', 'others'];
  nego_options = [true, false];
  user = 'test';
  email = 'test@test.com';

  constructor(private http: HttpClient) { }

  getMarketEntries(): Observable<MarketEntry[]> {
    this.http.get('api/v1/posts')
             .toPromise()
             .then(
               (res: MarketEntry[]) => {
                this.marketEntries.next(res);
               }).catch(this.handleError);
             return this.marketEntries.asObservable();
  }

  getMarketEntry(id: string): Promise<MarketEntry> {
    return this.http.get(`api/v1/posts/${id}`)
                    .toPromise()
                    .then((res: HttpResponse<any>) => res)
                    .catch(this.handleError);
  }

  private handleError(err: any): Promise<any> {
    console.error('An erro occurred', err);
    return Promise.reject(err.body || err);
  }

  addMarketEntry(marketEntry: MarketEntry) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(marketEntry);
    return this.http.post('api/v1/posts', marketEntry, httpOptions)
                    .toPromise()
                    .then( (res: HttpResponse<any>) => {
                      this.getMarketEntries();
                      return res;
                    })
                    .catch(this.handleError);
  }

  addEntry(entry: Entry) {
    entry.user = this.user;
    entry.email = this.email;
    console.log(entry.category);
    switch (entry.category) {
      case 'market': return this.addMarketEntry(entry);
    }
  }
}
