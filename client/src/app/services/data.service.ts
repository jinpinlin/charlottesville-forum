import { Injectable } from '@angular/core';

import { MarketEntry } from '../models/market-entry.model';
import { Entry } from '../models/entry.model';
import {HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { RentingEntry } from '../models/renting-entry.model';
import { RidesEntry } from '../models/rides-entry.model';
import { OthersEntry } from '../models/others-entry.model';

// const SERVER = 'http://ec2-54-198-47-214.compute-1.amazonaws.com:3000/';
const SERVER = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private marketEntries = new BehaviorSubject<MarketEntry[]>([]);
  private rentingEntries = new BehaviorSubject<RentingEntry[]>([]);
  private ridesEntries = new BehaviorSubject<RidesEntry[]>([]);
  private othersEntries = new BehaviorSubject<OthersEntry[]>([]);

  categories = ['market', 'renting', 'rides', 'others'];
  nego_options = [true, false];
  user = 'test';
  email = 'test@test.com';

  constructor(private http: HttpClient) { }

  getMarketEntries(): Observable<MarketEntry[]> {
    const params = new HttpParams().set('category', 'market');
    this.http.get( SERVER + 'api/v1/posts', {params: params})
             .toPromise()
             .then(
               (res: MarketEntry[]) => {
                this.marketEntries.next(res);
               }).catch(this.handleError);
             return this.marketEntries.asObservable();
  }

  getRentingEntries(): Observable<RentingEntry[]> {
    const params = new HttpParams().set('category', 'renting');
    this.http.get( SERVER + 'api/v1/posts', {params: params})
             .toPromise()
             .then(
               (res: RentingEntry[]) => {
                this.rentingEntries.next(res);
               }).catch(this.handleError);
             return this.rentingEntries.asObservable();
  }


  getRidesEntries(): Observable<RidesEntry[]> {
    const params = new HttpParams().set('category', 'rides');
    this.http.get( SERVER + 'api/v1/posts', {params: params})
             .toPromise()
             .then(
               (res: RidesEntry[]) => {
                this.ridesEntries.next(res);
               }).catch(this.handleError);
             return this.ridesEntries.asObservable();
  }
  getOthersEntries(): Observable<OthersEntry[]> {
    const params = new HttpParams().set('category', 'others');
    this.http.get( SERVER + 'api/v1/posts', {params: params})
             .toPromise()
             .then(
               (res: OthersEntry[]) => {
                this.othersEntries.next(res);
               }).catch(this.handleError);
             return this.othersEntries.asObservable();
  }

  getMarketEntry(id: string): Promise<MarketEntry> {
    // const params = new HttpParams().set('id', id);
    return this.http.get(SERVER + `api/v1/posts/${id}`)
                    .toPromise()
                    .then((res: HttpResponse<any>) => res)
                    .catch(this.handleError);
  }

  getRentingEntry(id: string): Promise<MarketEntry> {
    // const params = new HttpParams().set('id', id);
    return this.http.get(SERVER + `api/v1/posts/${id}`)
                    .toPromise()
                    .then((res: HttpResponse<any>) => res)
                    .catch(this.handleError);
  }


  getRidesEntry(id: string): Promise<RidesEntry> {
    // const params = new HttpParams().set('id', id);
    return this.http.get(SERVER + `api/v1/posts/${id}`)
                    .toPromise()
                    .then((res: HttpResponse<any>) => res)
                    .catch(this.handleError);
  }
  getOthersEntry(id: string): Promise<OthersEntry> {
    // const params = new HttpParams().set('id', id);
    return this.http.get(SERVER + `api/v1/posts/${id}`)
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
    return this.http.post(SERVER + 'api/v1/posts', marketEntry, httpOptions)
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
