import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { GameService } from "app/game.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  subscription: Subscription;
  isLoggedIn: boolean = false;
  public data;
  public name;
  private player ;
  public tenSecondCall;
  constructor(private common: CommonService, private router: Router, private game:GameService) {
    // this.subscription = this.common.getMessage().subscribe(data => {
    // this.isLoggedIn = data })
    // this.init();
  }

  ngOnInit() {
    this.logged();
    this.name = localStorage.getItem('PlayerName');
    if(this.name ){
this.getPlayerData();
    }
    let temp ={
        "PlayerName":this.name
      }
    // this.game.runUpdate(temp).subscribe(data=>{
    //   console.log(data);
    // })
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  getPlayerData(){
    this.name =  localStorage.getItem('PlayerName');
    this.player  = {
    "PlayerName": this.name
  }
  this.init();
  this.tenSecondCall = Observable.interval(10000).subscribe(x => {
      if (this.isLoggedIn) {
        this.init();
      }
    });
  }

  init() {
    this.common.navData(this.player).subscribe(data => {
      this.data = JSON.parse(data._body);
      // console.log(this.data);
      this.common.sendMessage(this.data);
    })
  }
  logged() {
    if (localStorage.getItem('auth') == 'yes') {
      this.isLoggedIn = true;
    }
    else {
      this.isLoggedIn = false;
    }
  }

  logout() {
    localStorage.removeItem('auth');
    localStorage.removeItem('PlayerName');
    this.logged();
    this.router.navigate(['/login'])
    window.location.reload();
  }

}
