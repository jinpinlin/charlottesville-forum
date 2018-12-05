import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { RentingEntry } from '../../models/renting-entry.model';

@Component({
  selector: 'app-renting-detail',
  templateUrl: './renting-detail.component.html',
  styleUrls: ['./renting-detail.component.css']
})
export class RentingDetailComponent implements OnInit {

  rentingEntry: RentingEntry;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
      this.dataService.getRentingEntry(params['id'])
        .then(rentingEntry => {
          console.log(rentingEntry);
          console.log(rentingEntry.imagePaths);
          // if (rentingEntry.imagePaths.length !== 0) { rentingEntry.imagePaths = JSON.parse(rentingEntry.imagePaths[0]); }
          console.log(rentingEntry.imagePaths);
          this.rentingEntry = rentingEntry;
        });
    }
    );
  }

}
