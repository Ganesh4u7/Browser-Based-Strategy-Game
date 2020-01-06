import { Component, OnInit } from '@angular/core';
import { CommonService } from "app/common.service";

@Component({
  selector: 'app-stable',
  templateUrl: './stable.component.html',
  styleUrls: ['./stable.component.css']
})
export class StableComponent implements OnInit {
  private name = localStorage.getItem('PlayerName');
   private player = {
 "PlayerName":this.name
}
public data;
public upgrade;
 public troop1;
  public troop2;
  public troop3;
  constructor(private service : CommonService) {
    this.init();
   }

init(){
  this.troop1 = null;
  this.troop2 = null;
  this.troop3 = null;
  this.service.stable(this.player).subscribe(data=>{
      this.data = JSON.parse(data._body);
      console.log(this.data);
    })
}
  ngOnInit() {
  }

  public upgradeLevel(){
  this.upgrade ={
 "PlayerName":this.name,
 "food":this.data.Bfood,
 "wood":this.data.Bwood,
 "iron":this.data.Biron,
 "gold":this.data.Bgold
}
this.service.upgradeStable(this.upgrade).subscribe(data=>{
  alert(data._body);
})
  }


  createTroop1(){
    if(this.troop1 == null || this.troop1 <= 0){
    alert('Please Enter Valid Troops');

  }
  else{
    alert('Troops will be created');

    let temp ={
  "PlayerName":this.name,
  "food":this.data.s1f ,
  "wood":this.data.s1w,
  "iron":this.data.s1i ,
  "gold":this.data.s1g,
  "totTroops":this.troop1

}
this.service.stableTroop1(temp).subscribe(data=>{
  alert(data);
  console.log(data);
  this.init();
})
  }

  }

  createTroop2(){
     if(this.troop2 == null || this.troop2 <= 0){
    alert('Please Enter Valid Troops');

  }
  else{
    alert('Troops will be created');
    let temp ={
  "PlayerName":this.name,
  "food":this.data.s2f ,
  "wood":this.data.s2w ,
  "iron":this.data.s2i ,
  "gold":this.data.s2g ,
  "totTroops":this.troop2

}
this.service.stableTroop2(temp).subscribe(data=>{
  alert("Troops Created");
  this.init();
})
  }
  }
  createTroop3(){
     if(this.troop3 == null || this.troop3 <= 0){
    alert('Please Enter Valid Troops');

  }
  else{
    alert('Troops will be created');
    let temp ={
  "PlayerName":this.name,
  "food":this.data.s3f ,
  "wood":this.data.s3w ,
  "iron":this.data.s3i ,
  "gold":this.data.s3g ,
  "totTroops":this.troop3

}
console.log(temp);
this.service.stableTroop3(temp).subscribe(data=>{
  alert("Troops Created");
  this.init();
})
  }
  }

}
