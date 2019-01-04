import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUtil } from 'src/app/auth/service/cognito.service';
import { UserLoginService } from 'src/app/auth/service/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router, private cognitoUtil: CognitoUtil, private userLoginService: UserLoginService ) { }
  ngOnInit() {
    this.username = this.cognitoUtil.getCurrentUser().getUsername();
    }

}
