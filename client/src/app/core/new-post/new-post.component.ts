import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/entry.model';
import { DataService } from 'src/app/services/data.service';

const DEFAULT_ENTRY: Entry = Object.freeze({
  id: '0',
  title: '',
  desc: '',
  user: '',
  category: '',
  nego: false,
  imagePaths: ['']
});

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  newEntry = Object.assign({}, DEFAULT_ENTRY);

  categories = this.dataService.categories;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.newEntry.id);
  }

  onAddEntry( entry: Entry) {
    this.dataService.addEntry(this.newEntry);
    this.newEntry = Object.assign({}, DEFAULT_ENTRY);
  }

}
