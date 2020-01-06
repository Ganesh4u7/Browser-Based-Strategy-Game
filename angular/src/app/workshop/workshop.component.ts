import { Component, OnInit } from '@angular/core';
import { CommonService } from "app/common.service";

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent implements OnInit 
{
 
public data;
public upgrade;
 public troop1;
  public troop2;
  public troop3;
  private name = localStorage.getItem('PlayerName');
  private player = {
 "PlayerName":this.name
}
  constructor(private service : CommonService) {
    this.init();
   }

init(){
    this.troop1 = null;
  this.troop2 = null;
  this.troop3 = null;
   this.service.workShop(this.player).subscribe(data=>{
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
this.service.upgradeworkShop(this.upgrade).subscribe(data=>{
  alert(data._body);
  this.init();
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
  "food":this.data.w1f ,
  "wood":this.data.w1w ,
  "iron":this.data.w1i ,
  "gold":this.data.w1g ,
  "totTroops":this.troop1
 
}
this.service.workShop1(temp).subscribe(data=>{
  alert("Troops Created");
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
  "food":this.data.w2f ,
  "wood":this.data.w2w ,
  "iron":this.data.w2i ,
  "gold":this.data.w2g ,
  "totTroops":this.troop2
 
}
this.service.workShop2(temp).subscribe(data=>{
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
  "food":this.data.w3f ,
  "wood":this.data.w3w ,
  "iron":this.data.w3i ,
  "gold":this.data.w3g ,
  "totTroops":this.troop3 
}
this.service.workShop3(temp).subscribe(data=>{
  alert("Troops Created");
  this.init();
})
  }
  }
}
