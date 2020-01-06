import { Component, OnInit } from '@angular/core';
import { GreetingsService } from '../greetings.service';
import { CommonService } from '../common.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public resources = {};
  public villagers = 0;
  public count;
  public show: boolean;
  subscription: Subscription;
  public data;
  private name = localStorage.getItem('PlayerName');
  constructor(private greet: GreetingsService, private common: CommonService) { }

  ngOnInit() {
    this.init()
  }
  init() {
    let player = { "PlayerName": this.name }
    this.count = null;
    this.show = false;
    this.common.townCenter(player).subscribe(data => {
      this.data = JSON.parse(data._body);
      console.log(this.data);
    })
  }


  upgradeTownCenter() {
    this.show = true;
    let player = {
      "PlayerName": this.name,
      "food": this.data.Bfood,
      "wood": this.data.Bwood,
      "iron": this.data.Biron,
      "gold": this.data.Bgold
    }
    let unsb = this.common.getMessage().subscribe(data => {
        console.log(data);
        if ((data.food < this.data.Bfood) || (data.wood < this.data.Bwood) || (data.iron < this.data.Bgold) || (data.gold < this.data.Biron)) {
          alert('You do not have enough resources');
          unsb.unsubscribe();
          this.show = false;
        }
        else {
          this.common.upgradeTown(player).subscribe(data => {
      alert(data._body);
      this.show = false;
    });
        }
      })

  }

  createVillager() {
    console.log(this.count);
    if (this.count == null || this.count<=0) {
      alert('Please Enter Valid Number of Villagers')
    }
    else {
      this.show = true;
      let temp = {
        "PlayerName": this.name,
        "food": this.data.v1f * this.count,
        "wood": this.data.v1w * this.count,
        "iron": this.data.v1i * this.count,
        "gold": this.data.v1g * this.count,
        "totVillagers": this.count
      }
      let unsb = this.common.getMessage().subscribe(data => {
        console.log(data);
        if ((data.food < this.count * this.data.v1f) || (data.wood < this.count * this.data.v1w) || (data.iron < this.count * this.data.v1i) || (data.gold < this.count * this.data.v1g)) {
          alert("Not enough Resources");
          unsb.unsubscribe();
          this.show = false;
        }
        else {
          this.common.createVillager(temp).subscribe(data => {
            alert("Villager Creation has been initiated");
            unsb.unsubscribe();
            this.init();
          });
        }
      })
    }
  }
}
