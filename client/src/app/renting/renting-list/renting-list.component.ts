import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { RentingEntry } from 'src/app/models/renting-entry.model';

@Component({
  selector: 'app-renting-list',
  templateUrl: './renting-list.component.html',
  styleUrls: ['./renting-list.component.css']
})
export class RentingListComponent implements OnInit {

  rentingEntries: RentingEntry[];
  p = 1;

  subscriptionRentingEntries: Subscription;
  constructor(private dataSerive: DataService) {}
  ngOnInit() {
    this.subscriptionRentingEntries = this.dataSerive.getRentingEntries()
                                                    .subscribe(
                                                      rentingEntries =>
                                                      this.rentingEntries = rentingEntries);
  }

  pageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
 }
}
