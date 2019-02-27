import { Component, OnInit } from '@angular/core';
import { RidesEntry } from 'src/app/models/rides-entry.model';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-rides-list',
  templateUrl: './rides-list.component.html',
  styleUrls: ['./rides-list.component.css']
})
export class RidesListComponent implements OnInit {

  ridesEntries: RidesEntry[];
  p = 1;

  subscriptionRidesEntries: Subscription;
  constructor(private dataSerive: DataService) {}
  ngOnInit() {
    this.subscriptionRidesEntries = this.dataSerive.getRidesEntries()
                                                    .subscribe(
                                                      ridesEntries =>
                                                      this.ridesEntries = ridesEntries);
  }

  pageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
 }
}
