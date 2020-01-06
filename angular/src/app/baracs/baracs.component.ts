import { Component, OnInit } from '@angular/core';
import { CommonService } from "app/common.service";


@Component({
  selector: 'app-baracs',
  templateUrl: './baracs.component.html',
  styleUrls: ['./baracs.component.css']
})
export class BaracsComponent implements OnInit {
public data ;
  public upgrade;
  public troop1;
  public troop2;
  public troop3;
   private name = localStorage.getItem('PlayerName');
  constructor(private service : CommonService) {
    this.init();
   }
  
  
  private player = {
 "PlayerName":this.name
}
public upgradeLevel(){
  this.upgrade ={
 "PlayerName":this.name,
 "food":this.data.Bfood,
 "wood":this.data.Bwood,
 "iron":this.data.Biron,
 "gold":this.data.Bgold
}
this.service.upgradeBarracs(this.upgrade).subscribe(data=>{
 alert(data._body);
})
}
init(){
  this.troop1 = null;
  this.troop2 = null;
  this.troop3 = null;
  
 this.service.barracs(this.player).subscribe(data=>{
      this.data = JSON.parse(data._body);
      
    })  
}

  ngOnInit() {
   
  }

  createTroop1(){
     if(this.troop1 == null || this.troop1 <= 0){
    alert('Please Enter Valid Troops');
      
  }
  else{
    alert('Troops will be created');
    let temp ={
  "PlayerName":this.name,
  "food":this.data.t1f ,
  "wood":this.data.t1w ,
  "iron":this.data.t1i ,
  "gold":this.data.t1g ,
  "totTroops":this.troop1
 
}
this.service.createTroop1(temp).subscribe(data=>{
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
  "food":this.data.t2f ,
  "wood":this.data.t2w ,
  "iron":this.data.t2i ,
  "gold":this.data.t2g ,
  "totTroops":this.troop2
 
}
this.service.createTroop2(temp).subscribe(data=>{
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
    var temp ={
  "PlayerName":this.name,
  "food":this.data.t3f ,
  "wood":this.data.t3w ,
  "iron":this.data.t3i ,
  "gold":this.data.t3g ,
  "totTroops":this.troop3
 
}
console.log(temp);
this.service.createTroop3(temp).subscribe(data=>{
  alert("Troops Created");
  this.init();
})
  }
  }

}
