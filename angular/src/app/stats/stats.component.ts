import { Component, OnInit } from '@angular/core';
import { GameService } from "app/game.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  public result;
  public attackData=[];
  public attack = true;
  public defence = false;
  constructor( private game : GameService) { }

  ngOnInit() {
    this.attackingRank();
  }

  attackingRank(){
    this.defence = false;
    this.attack = true;
    this.game.attacking().subscribe(data=>{
      this.result = JSON.parse(data._body);

    })
  }

  defenceRanking(){
    this.defence = true;
    this.attack = false;
    this.game.defence().subscribe(data=>{
      this.result = JSON.parse(data._body);
      console.log(this.result);
    })
  }

}
