import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentingEntry } from 'src/app/models/renting-entry.model';
import { DataService } from 'src/app/services/data.service';

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
      this.dataService.getRentingEntry(params['id'])
        .then(rentingEntry => {
          console.log(rentingEntry.imagePaths);
          this.rentingEntry = rentingEntry;
        });
    }
    );
  }
}
