import { Component, OnInit } from '@angular/core';
import { Entry } from '../../models/entry.model';
import { DataService } from 'src/app/services/data.service';
import { UserLoginService } from 'src/app/auth/service/user-login.service';
import { Router } from '@angular/router';
import { CognitoUtil } from 'src/app/auth/service/cognito.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

  selectedFile: File = null;
  returnedResult = {};
  // returnedResult = null;
  printFile = false;
  categories = this.dataService.categories;
  nego_options = this.dataService.nego_options;

  user: string;
  email: string;

  constructor(private dataService: DataService,
    public router: Router,
    public userService: UserLoginService,
    private cognitoUtil: CognitoUtil,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.userService.isAuthenticated(this);
    console.log('in new-post');
    this.user = this.cognitoUtil.getCurrentUser().getUsername();
    this.email = this.cognitoUtil.getCurrentUser().getUsername();
  }

  onAddEntry() {
    this.dataService.addEntry(this.newEntry)
                .catch(err => console.log(err.body));
    this.newEntry = Object.assign({}, DEFAULT_ENTRY);
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
      if (!isLoggedIn) {
          this.router.navigate(['/loginhome/login']);
      } else {
          console.log('Login');
      }
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    this.postFile(this.selectedFile)
    .toPromise()
    .then( data => {
      this.returnedResult  = data;
      this.printFile = true;
      console.log('returnedResult is: ' + data); })
    .catch(err => {
      console.log(err);
    });
  }
  // onUpload() {
  //   this.postFile(this.selectedFile)
  //   .subscribe( data => {
  //     this.returnedResult = data;
  //     this.printFile = true;
  //     console.log(this.returnedResult);
  //   });
  // }

  postFile(fileToUpload: File): Observable<any> {
    const endpoint = 'http://3.86.86.151:5000';
    // const endpoint = 'http://0.0.0.0:5000';
    return this.httpClient.post(endpoint,
      this.selectedFile,
      {
        headers: { 'enctype': 'multipart/form-data' },
        reportProgress: true
      });
  }
}
