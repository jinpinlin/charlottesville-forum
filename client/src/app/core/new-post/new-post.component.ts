import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/entry.model';
import { DataService } from 'src/app/services/data.service';

const DEFAULT_ENTRY: Entry = Object.freeze({
  id: '0',
  title: '',
  title_en: '',
  desc: '',
  desc_en: '',
  user: '',
  created: undefined,
  email: '',
  category: '',
  nego: true,
  imagePaths: []
});

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  newEntry = Object.assign({}, DEFAULT_ENTRY);

  categories = this.dataService.categories;
  nego_options = this.dataService.nego_options;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log(this.newEntry.id);
  }

  onAddEntry() {
    this.dataService.addEntry(this.newEntry)
                .catch(err => console.log(err.body));
    this.newEntry = Object.assign({}, DEFAULT_ENTRY);
  }

}
