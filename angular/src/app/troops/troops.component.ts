import { Component, OnInit } from '@angular/core';
import { CommonService } from "app/common.service";
// import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-troops',
  templateUrl: './troops.component.html',
  styleUrls: ['./troops.component.css']
})
export class TroopsComponent implements OnInit {
  public defaultChoice = true;
  public t1;
  public t2;
  public t3;
  public t4;
  public t5;
  public t6;
  public t7;
  public t8;
  public t9;
  public PlayerName1;
  private name = localStorage.getItem('PlayerName');
   private player = {
 "PlayerName":this.name
}
public data;
  constructor(private common : CommonService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.t1 = 0;
    this.t2 = 0;
    this.t3 = 0;
    this.t4 = 0;
    this.t5 = 0;
    this.t6 = 0;
    this.t7 = 0;
    this.t8 = 0;
    this.t9 = 0;
    this.PlayerName1 = null;

    this.common.troops(this.player).subscribe(data=>{
      this.data = JSON.parse(data._body);
      console.log(this.data);
    })
  }

  assign() {
    let temp = {
      "PlayerName": this.name,
      "PlayerName1": this.PlayerName1,
      "t1": this.t1,
      "t2": this.t2,
      "t3": this.t3,
      "t4": this.t4,
      "t5": this.t5,
      "t6": this.t6,
      "t7": this.t7,
      "t8": this.t8,
      "t9": this.t9
    }
    if(this.PlayerName1 == null){
      alert('Please Enter Player Name')
    }
    else{

    if(this.defaultChoice){
 this.common.attack(temp).subscribe(data=>{
      alert(data._body);
      this.init();
    });
  }
  else{
     this.common.reinforce(temp).subscribe(data=>{
      alert(data._body);
       this.init();
    });
  }
   
  }
    }
  
}
