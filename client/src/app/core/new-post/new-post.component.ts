import { Component, OnInit } from '@angular/core';
import { Entry } from 'src/app/share/entry.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  newEntries: Entry;
  user: 'test@test.com';
  
  constructor() { }

  ngOnInit() {
  }

}
