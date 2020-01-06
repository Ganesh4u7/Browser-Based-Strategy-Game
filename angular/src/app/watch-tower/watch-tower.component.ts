import { Component, OnInit } from '@angular/core';
import { GameService } from "app/game.service";
import {CommonService} from "../common.service";

@Component({
  selector: 'app-watch-tower',
  templateUrl: './watch-tower.component.html',
  styleUrls: ['./watch-tower.component.css']
})
export class WatchTowerComponent implements OnInit {

  constructor(private common: CommonService) {}
  public data;
  private name = localStorage.getItem('PlayerName');
  private player = {
    "PlayerName": this.name
  }
  ngOnInit() {
    this.init()
  }

  init() {
    this.common.watchTower(this.player).subscribe(data => {
       console.log(data);
      this.data = JSON.parse(data._body);
    })

  }
  public upgradeLevel() {
    let upgrade = {
      "PlayerName": this.name,
      "food": this.data.Bfood,
      "wood": this.data.Bwood,
      "iron": this.data.Biron,
      "gold": this.data.Bgold
    }
    this.common.upgradeWatchTower(upgrade).subscribe(data => {
      alert(data._body);
      this.init();
    })
  }

}
