import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MarketComponent } from './market/market.component';
import { RentingComponent } from './renting/renting.component';
import { RidesComponent } from './rides/rides.component';
import { OthersComponent } from './others/others.component';
import { AboutComponent } from './about/about.component';
import { MarketDetailComponent } from './market/market-detail/market-detail.component';
import { NewPostComponent } from './core/new-post/new-post.component';
import { LoginComponent } from './auth/public/auth/login/login.component';
import { RegisterComponent } from './auth/public/auth/register/registration.component';
import { RegistrationConfirmationComponent, LogoutComponent } from './auth/public/auth/confirm/confirmRegistration.component';
import { ResendCodeComponent } from './auth/public/auth/resend/resendCode.component';
import { ForgotPassword2Component, ForgotPasswordStep1Component } from './auth/public/auth/forgot/forgotPassword.component';
import { NewPasswordComponent } from './auth/public/auth/newpassword/newpassword.component';
import { LoginAboutComponent, HomeLandingComponent, LoginHomeComponent } from './auth/public/home.component';
import { SecureHomeComponent } from './auth/secure/landing/securehome.component';
import { JwtComponent } from './auth/secure/jwttokens/jwt.component';
import { MyProfileComponent } from './auth/secure/profile/myprofile.component';
import { UseractivityComponent } from './auth/secure/useractivity/useractivity.component';
import { OthersListComponent } from './others/others-list/others-list.component';
import { OthersDetailComponent } from './others/others-detail/others-detail.component';
import { RidesDetailComponent } from './rides/rides-detail/rides-detail.component';
import { RidesListComponent } from './rides/rides-list/rides-list.component';
import { RentingListComponent } from './renting/renting-list/renting-list.component';
import { RentingDetailComponent } from './renting/renting-detail/renting-detail.component';
import { MarketListComponent } from './market/market-list/market-list.component';

// const homeRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: 'loginhome',
//     pathMatch: 'full',
//   },
//   {
//     path: '',
//     component: LoginHomeComponent,
//     children: [
//       { path: 'about', component: LoginAboutComponent },
//       { path: 'login', component: LoginComponent },
//       { path: 'register', component: RegisterComponent },
//       { path: 'confirmRegistration/:username', component: RegistrationConfirmationComponent },
//       { path: 'resendCode', component: ResendCodeComponent },
//       { path: 'forgotPassword/:email', component: ForgotPassword2Component },
//       { path: 'forgotPassword', component: ForgotPasswordStep1Component },
//       { path: 'newPassword', component: NewPasswordComponent },
//       { path: '', component: HomeLandingComponent },

//     ]
//   }
// ];

// const secureHomeRoutes: Routes = [
//   {
//     path: '',
//     redirectTo: '/securehome',
//     pathMatch: 'full'
//   },
//   {
//     path: 'securehome', component: SecureHomeComponent,
//     children: [
//       { path: 'logout', component: LogoutComponent },
//       { path: 'jwttokens', component: JwtComponent },
//       { path: 'myprofile', component: MyProfileComponent },
//       { path: 'useractivity', component: UseractivityComponent },
//       { path: '', component: MyProfileComponent }]
//   }
// ];

// const routes: Routes = [
//   {
//     path: '',
//     children: [
//       { path: 'market', component: MarketComponent },
//       { path: 'market/:id', component: MarketDetailComponent },
//       { path: 'new-post', component: NewPostComponent },
//       { path: 'renting', component: RentingComponent },
//       { path: 'rides', component: RidesComponent },
//       { path: 'others', component: OthersComponent },
//       { path: 'about', component: AboutComponent },
//       ...homeRoutes,
//       ...secureHomeRoutes,
//       {
//         path: '**',
//         component: HomeComponent
//       }
//     ]
//   }
// ];

const routes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {path: 'home', component: HomeComponent},
    { path: 'market', component: MarketComponent, children: [
      { path: '', redirectTo: 'market-list', pathMatch: 'full'},
      { path: 'market-list', component: MarketListComponent},
      { path: 'market-detail/:id', component: MarketDetailComponent }
    ]},
    { path: 'renting', component: RentingComponent, children: [
      { path: '', redirectTo: 'renting-list', pathMatch: 'full'},
      { path: 'renting-list', component: RentingListComponent},
      { path: 'renting-detail/:id', component: RentingDetailComponent }
    ]},
    { path: 'rides', component: RidesComponent, children: [
      { path: '', redirectTo: 'rides-list', pathMatch: 'full'},
      { path: 'rides-list', component: RidesListComponent},
      { path: 'rides-detail/:id', component: RidesDetailComponent }
    ]},
    { path: 'others', component: OthersComponent, children: [
      { path: '', redirectTo: 'others-list', pathMatch: 'full'},
      { path: 'others-list', component: OthersListComponent},
      { path: 'others-detail/:id', component: OthersDetailComponent }
    ]},
    { path: 'new-post', component: NewPostComponent },
    { path: 'about', component: AboutComponent },
    {
      path: 'loginhome',
      component: LoginHomeComponent,
      children: [
        { path: 'about', component: LoginAboutComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'confirmRegistration/:username', component: RegistrationConfirmationComponent },
        { path: 'resendCode', component: ResendCodeComponent },
        { path: 'forgotPassword/:email', component: ForgotPassword2Component },
        { path: 'forgotPassword', component: ForgotPasswordStep1Component },
        { path: 'newPassword', component: NewPasswordComponent },
        { path: '', component: LoginComponent },
      ]
    },
    {
      path: 'securehome', component: SecureHomeComponent,
      children: [
        { path: 'logout', component: LogoutComponent },
        { path: 'jwttokens', component: JwtComponent },
        { path: 'myprofile', component: MyProfileComponent },
        { path: 'useractivity', component: UseractivityComponent },
        { path: '', component: MyProfileComponent }]
    },
    {
      path: '**',
      redirectTo: 'home'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
