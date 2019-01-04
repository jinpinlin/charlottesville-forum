import { Component, OnInit } from '@angular/core';
import { OthersEntry } from 'src/app/models/others-entry.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-others-detail',
  templateUrl: './others-detail.component.html',
  styleUrls: ['./others-detail.component.css']
})
export class OthersDetailComponent implements OnInit {

  othersEntry: OthersEntry;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.dataService.getOthersEntry(params['id'])
        .then(othersEntry => {
          console.log(othersEntry.imagePaths);
          this.othersEntry = othersEntry;
        });
    }
    );
  }
}
