import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}  from './dashboard/dashboard.component';
import {SignupComponent} from './signup/signup.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import { MarketplaceComponent } from "app/marketplace/marketplace.component";
import {AssignRevokeComponent} from './assign-revoke/assign-revoke.component';
import { ResourcesComponent } from "app/resources/resources.component";
import { TroopsComponent } from "app/troops/troops.component";
import { HomeComponent } from "app/home/home.component";
import { BlackSmithComponent } from "app/black-smith/black-smith.component";
import { BaracsComponent } from "app/baracs/baracs.component";
import { StableComponent } from "app/stable/stable.component";
import { WorkshopComponent } from "app/workshop/workshop.component";
import { GameService } from "app/game.service";
import {WatchTowerComponent} from "app/watch-tower/watch-tower.component";
import {StatsComponent} from "app/stats/stats.component";

const routes: Routes = [
  {
    path:'',
    component : DashboardComponent 
  },
  {
    path:'stats',
    component : StatsComponent 
  },
  {
    path:'signup',
    component: SignupComponent
  },
  {
    path:'villager',
    canActivate: [GameService],
    component: AboutComponent
  },
  {
    path:'market',
    canActivate: [GameService],
    component: MarketplaceComponent
  }
  ,{
    path:'login',
    component : LoginComponent
  },
  {
    path:'ar',
    canActivate: [GameService],
    component : AssignRevokeComponent
  },
  {
    path :'resources',
    canActivate: [GameService],
    component : ResourcesComponent
  },
  {
    path : 'troops',
    canActivate: [GameService],
    component : TroopsComponent
  },
  {
    path : 'home',
    canActivate: [GameService],
    component : HomeComponent
  },{
    path:'blackSmith',
    canActivate: [GameService],
    component : BlackSmithComponent
  },{
    path:'baracs',
    canActivate: [GameService],
    component : BaracsComponent
  },{
    path : 'stable',
    canActivate: [GameService],
    component : StableComponent
  }
  ,{
    path:'workshop',
    canActivate: [GameService],
    component:WorkshopComponent
  },
  {
    path : 'tower',
    canActivate:[GameService],
    component: WatchTowerComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
