import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MarketComponent } from './market/market.component';
import { RentingComponent } from './renting/renting.component';
import { RidesComponent } from './rides/rides.component';
import { OthersComponent } from './others/others.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'market', component: MarketComponent},
  {path: 'renting', component: RentingComponent},
  {path: 'rides', component: RidesComponent},
  {path: 'others', component: OthersComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
