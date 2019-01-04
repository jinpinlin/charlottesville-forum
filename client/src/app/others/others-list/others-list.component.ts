import { Component, OnInit } from '@angular/core';
import { OthersEntry } from 'src/app/models/others-entry.model';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-others-list',
  templateUrl: './others-list.component.html',
  styleUrls: ['./others-list.component.css']
})
export class OthersListComponent implements OnInit {

  othersEntries: OthersEntry[];
  p = 1;

  subscriptionOthersEntries: Subscription;
  constructor(private dataSerive: DataService) {}
  ngOnInit() {
    this.subscriptionOthersEntries = this.dataSerive.getOthersEntries()
                                                    .subscribe(
                                                      othersEntries =>
                                                      this.othersEntries = othersEntries);
  }
  pageChange(page: number) {
    this.p = page;
    window.scrollTo(0, 0);
 }
}
