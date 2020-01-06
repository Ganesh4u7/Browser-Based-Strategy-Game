import { Component, OnInit } from '@angular/core';
import { GameService } from "app/game.service";

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {

  private food: Number;
  private wood: Number;
  private iron: Number;
  private gold: Number;
  private name: String;
  private market = {};
  private Playername = localStorage.getItem('PlayerName');
  private player = {
    "PlayerName": this.Playername
  }
  public data = {};
  constructor(private game: GameService) {
    this.init();
    this.game.marketPlace(this.player).subscribe(data => {
      this.data = JSON.parse(data._body);
      console.log(this.data);
    })
  }
  init() {
    this.food = null;
    this.wood = null;
    this.gold = null;
    this.iron = null;
    this.name = null;
  }
  ngOnInit() {
  }
  Trade() {
    if (this.name == null) {
      alert('Please Enter Player Name');
    }
    else {
      if (this.food == null) {
        this.food = 0
      }
      if (this.wood == null) {
        this.wood = 0
      }
      if (this.gold == null) {
        this.gold = 0
      }
      if (this.iron == null) {
        this.iron = 0
      }
      this.market = {
        "PlayerName": this.name,
        "food": this.food,
        "wood": this.wood,
        "gold": this.gold,
        "iron": this.iron
      }
      let temp = {
        "PlayerName": this.Playername,
        "food": this.food,
        "wood": this.wood,
        "gold": this.gold,
        "iron": this.iron
      }
      this.game.cutUser(temp).subscribe(data => { alert(data._body) });
      var self = this;
      setTimeout(function () {
        self.game.sendResource(self.market).subscribe(data => { alert(data._body) });
        self.ClearValues();
      }, 3000)

    }
  }

  ClearValues() {
    this.init();
  }
}
