import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormlyModule, FormlyBootstrapModule} from 'ng-formly';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { DataTableModule } from 'angular-4-data-table/src/index';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule} from './app-routing.module';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import {GreetingsService} from './greetings.service';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import {CommonService} from './common.service';
import { GameService } from "app/game.service";
import { AssignRevokeComponent } from './assign-revoke/assign-revoke.component';
import { ResourcesComponent } from './resources/resources.component';
import { TroopsComponent } from './troops/troops.component';
import { HomeComponent } from './home/home.component';
import { BlackSmithComponent } from './black-smith/black-smith.component';
import { BaracsComponent } from './baracs/baracs.component';
import { StableComponent } from './stable/stable.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { WatchTowerComponent } from './watch-tower/watch-tower.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignupComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    MarketplaceComponent,
    AssignRevokeComponent,
    ResourcesComponent,
    TroopsComponent,
    HomeComponent,
    BlackSmithComponent,
    BaracsComponent,
    StableComponent,
    WorkshopComponent,
    WatchTowerComponent,
    StatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    HttpModule,
    DataTableModule
  ],
  providers: [GreetingsService,CommonService,GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
