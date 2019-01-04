import { Injectable } from '@angular/core';
// import { AmplifyService } from 'aws-amplify-angular';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
//   private user = new BehaviorSubject<User>(null);

//   constructor( private amplifyService: AmplifyService) { }
//   getUserInfo() {
//     this.amplifyService.auth().currentAuthenticatedUser()
//     .then(
//       cognitoUser => {
//         this.user.email = cognitoUser.email;
//         this.user.email_verified = cognitoUser.email_verified;
//         this.user.phone_number = cognitoUser.phone_number;
//         this.user.username = cognitoUser.usernamae;
//         this.user.idToken = cognitoUser.singInUserSession.idToken;
//         this.user.accessToken = cognitoUser.singInUserSession.accessToken;
//         this.user.refreshToken = cognitoUser.singInUserSession.refreshToken;
//       }
//     );
//   }
// }


// this.amplifyService.authStateChange$
// .subscribe(authState => {
//   this.signedIn = authState.state === 'signedIn';
//   if (!authState.user) {
//     this.user = null;
//   } else {
//     this.user = authState.user;
//     this.greeting = 'Hello ' + this.user.username;
//     console.log(this.greeting);
//     // this.route.navigate(['/home']);
//   }
// });
}
