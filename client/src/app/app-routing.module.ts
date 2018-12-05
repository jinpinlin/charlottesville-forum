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
    { path: 'home', component: HomeComponent },
    { path: 'market', component: MarketComponent },
    { path: 'market/:id', component: MarketDetailComponent },
    { path: 'new-post', component: NewPostComponent },
    { path: 'renting', component: RentingComponent },
    { path: 'renting/:id', component: RentingComponent },
    { path: 'rides', component: RidesComponent },
    { path: 'rides/:id', component: RidesComponent },
    { path: 'others', component: OthersComponent },
    { path: 'others/:id', component: OthersComponent },
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
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const appRoutingProviders: any[] = [];
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
