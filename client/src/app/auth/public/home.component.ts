import {Component, OnInit} from '@angular/core';

declare let AWS: any;
declare let AWSCognito: any;

@Component({
    selector: 'app-awscognito-angular',
    template: '<p>Hello and welcome!"</p>'
})
export class LoginAboutComponent {

}

@Component({
    selector: 'app-awscognito-angular',
    templateUrl: './landinghome.html'
})
export class HomeLandingComponent {
    constructor() {
        console.log('HomeLandingComponent constructor');
    }
}

@Component({
    selector: 'app-awscognito-angular',
    templateUrl: './home.html'
})
export class LoginHomeComponent implements OnInit {

    constructor() {
        console.log('HomeComponent constructor');
    }

    ngOnInit() {

    }
}


