import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { MarketListComponent } from './market/market-list/market-list.component';
import { RentingListComponent } from './renting/renting-list/renting-list.component';
import { RidesListComponent } from './rides/rides-list/rides-list.component';
import { RidesEntryComponent } from './rides/rides-entry/rides-entry.component';
import { RidesComponent } from './rides/rides.component';
import { RentingComponent } from './renting/renting.component';
import { MarketComponent } from './market/market.component';
import { OthersComponent } from './others/others.component';
import { AboutComponent } from './about/about.component';
import { MarketDetailComponent } from './market/market-detail/market-detail.component';
import { NewPostComponent } from './core/new-post/new-post.component';
import { NewPasswordComponent } from './auth/public/auth/newpassword/newpassword.component';
import { LoginComponent } from './auth/public/auth/login/login.component';
import { LogoutComponent, RegistrationConfirmationComponent } from './auth/public/auth/confirm/confirmRegistration.component';
import { ResendCodeComponent } from './auth/public/auth/resend/resendCode.component';
import { ForgotPasswordStep1Component, ForgotPassword2Component } from './auth/public/auth/forgot/forgotPassword.component';
import { RegisterComponent } from './auth/public/auth/register/registration.component';
import { MFAComponent } from './auth/public/auth/mfa/mfa.component';
import { LoginHomeComponent, LoginAboutComponent, HomeLandingComponent } from './auth/public/home.component';
import { UseractivityComponent } from './auth/secure/useractivity/useractivity.component';
import { MyProfileComponent } from './auth/secure/profile/myprofile.component';
import { SecureHomeComponent } from './auth/secure/landing/securehome.component';
import { JwtComponent } from './auth/secure/jwttokens/jwt.component';
import { CognitoUtil } from './auth/service/cognito.service';
import { AwsUtil } from './auth/service/aws.service';
import { DynamoDBService } from './auth/service/ddb.service';
import { UserRegistrationService } from './auth/service/user-registration.service';
import { UserLoginService } from './auth/service/user-login.service';
import { UserParametersService } from './auth/service/user-parameters.service';
import { RentingDetailComponent } from './renting/renting-detail/renting-detail.component';
import { RidesDetailComponent } from './rides/rides-detail/rides-detail.component';
import { OthersDetailComponent } from './others/others-detail/others-detail.component';
import { OthersListComponent } from './others/others-list/others-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MarketComponent,
    MarketListComponent,
    RentingComponent,
    RentingListComponent,
    RentingDetailComponent,
    RidesComponent,
    RidesListComponent,
    RidesEntryComponent,
    RidesDetailComponent,
    OthersComponent,
    OthersDetailComponent,
    OthersListComponent,
    AboutComponent,
    MarketDetailComponent,
    NewPostComponent,
    NewPasswordComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationConfirmationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPassword2Component,
    RegisterComponent,
    MFAComponent,
    LoginAboutComponent,
    HomeLandingComponent,
    LoginHomeComponent,
    UseractivityComponent,
    MyProfileComponent,
    SecureHomeComponent,
    JwtComponent,
    AppComponent,
    RentingDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    // routing
  ],
  providers: [
    CognitoUtil,
    AwsUtil,
    DynamoDBService,
    UserRegistrationService,
    UserLoginService,
    UserParametersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
