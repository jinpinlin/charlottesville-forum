import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { MarketComponent } from './market/market.component';
import { RentingComponent } from './renting/renting.component';
import { RidesComponent } from './rides/rides.component';
import { OthersComponent } from './others/others.component';
import { AboutComponent } from './about/about.component';
import { MarketEditComponent } from './market/market-edit/market-edit.component';
import { MarketDetailComponent } from './market/market-detail/market-detail.component';
import { resolveDirective } from '@angular/core/src/render3/instructions';
import { NewPostComponent } from './core/new-post/new-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'market',
    component: MarketComponent
  },
  {
    path: 'market/:id',
    component: MarketDetailComponent
  },
  {
    path: 'new-post',
    component: NewPostComponent
  },
  {path: 'renting', component: RentingComponent},
  {path: 'rides', component: RidesComponent},
  {path: 'others', component: OthersComponent},
  {path: 'about', component: AboutComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
