import { Component, OnInit } from '@angular/core';
import { RidesEntry } from 'src/app/models/rides-entry.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rides-detail',
  templateUrl: './rides-detail.component.html',
  styleUrls: ['./rides-detail.component.css']
})
export class RidesDetailComponent implements OnInit {

  ridesEntry: RidesEntry;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dataService.getRidesEntry(params['id'])
        .then(ridesEntry => {
          console.log(ridesEntry.imagePaths);
          this.ridesEntry = ridesEntry;
        });
    }
    );
  }
}
