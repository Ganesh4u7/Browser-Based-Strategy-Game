import { Component, OnInit } from '@angular/core';
import { GameService } from "app/game.service";

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  public showWood = false;
  public showFood = false;
  public showIron = false;
  public showGold = false;
  public all = true;
//Wood variables
  public AvailableVillagers = null;
  public CurrentProduction = null;
  public InWood = null;
  public assignForWood = null;
  public removeForWood = null;

  //Food
  public foodVillagers = null;
  public foodCurrentProduction = null;
  public inFood = null;
  public assignForFood = null;
  public removeForFood = null;

  //Iron
  public ironVillagers = null;
  public ironCurrentProduction = null;
  public inIron = null;
  public assignForIron = null;
  public removeForIron = null;

  //Gold
  public goldVillagers = null;
  public goldCurrentProduction = null;
  public inGold = null;
  public assignForGold = null;
  public removeForGold = null;

private name = localStorage.getItem('PlayerName');

  private player = {  "PlayerName":this.name }
  constructor( private game : GameService) { }

  ngOnInit() {
    
  }

  wood(){
    this.all = false;
    this.showWood = true;
    this.assignForWood = null;
    this.removeForWood = null;
    this.game.Wood(this.player).subscribe(data =>{
      console.log(data);
      var dummy = JSON.parse(data._body);
      this.InWood = dummy.InWood;
      this.AvailableVillagers = dummy.AvailableVillagers;
      this.CurrentProduction = dummy.CurrentProduction;
    })
  }
  food(){
    this.all = false;
    this.showFood = true;
    this.assignForFood = null;
    this.removeForFood = null;
    this.game.Food(this.player).subscribe(data =>{
      console.log(data); 
      var dummy = JSON.parse(data._body);
      this.inFood = dummy.InFood;
      this.foodVillagers = dummy.AvailableVillagers;
      this.foodCurrentProduction = dummy.CurrentProduction;
    })
  }
  iron(){
    this.all = false;
    this.showIron = true;
    this.assignForIron = null;
    this.removeForIron = null;
    this.game.Iron(this.player).subscribe(data =>{
      console.log(data); 
      var dummy = JSON.parse(data._body);
      console.log(dummy);
      this.inIron = dummy.InIron;
      this.ironVillagers = dummy.AvailableVillagers;
      this.ironCurrentProduction = dummy.CurrentProduction;
    })
  }
  gold(){
    this.all = false;
    this.showGold = true;
    this.assignForGold = null;
    this.removeForGold = null;
    this.game.Gold(this.player).subscribe(data =>{
      console.log(data); 
      var dummy = JSON.parse(data._body);
      console.log(dummy);
      this.inGold = dummy.InGold;
      this.goldVillagers = dummy.AvailableVillagers;
      this.goldCurrentProduction = dummy.CurrentProduction;
    })
  }
resources(){
    
  this.all = true;
  this.showWood = false;
  this.showFood = false;
  this.showGold = false;
  this.showIron = false;
}
assignWood(){
  if(this.AvailableVillagers < this.assignForWood){
    alert("You dont have enough villagers to assign");
  }
  else{
    var temp ={
 "PlayerName":this.name,
	"InWood":this.assignForWood
	
}
    this.game.assignInWood(temp).subscribe(data=>{
      console.log(data);
      alert('Villagers Added');
      this.wood();
    })
  }
}
removeWood(){

if(this.InWood < this.removeForWood){
    alert("You dont have enough villagers to Remove");
  }
  else{
      var temp ={
 "PlayerName":this.name,
	"InWood":this.removeForWood
	
}
this.game.revokeInWood(temp).subscribe(data=>{
  alert('Villagers Removed');
  this.wood();
})
  }
}

assignFood(){
  if(this.foodVillagers < this.assignForFood){
    alert("You dont have enough villagers to assign");
  }
  else{
    var temp ={
 "PlayerName":this.name,
	"InFood":this.assignForFood
  //removeForFood
	
}
    this.game.assignInFood(temp).subscribe(data=>{
      alert('Villagers Added');
      this.food();
    })
  }
}
removeFood(){
  if(this.inFood < this.removeForFood){
    alert("You dont have enough villagers to Remove");
  }
  else{
      var temp ={
 "PlayerName":this.name,
	"InFood":this.removeForFood
	
}
this.game.revokeInFood(temp).subscribe(data=>{
  alert('Villagers Removed');
  this.food();
})
  }
}

assignIron(){
  if(this.ironVillagers < this.assignForIron){
    alert("You dont have enough villagers to assign");
  }
  else{
    var temp ={
 "PlayerName":this.name,
	"InIron":this.assignForIron
	
}
    this.game.assignInIron(temp).subscribe(data=>{
      console.log(data);
      alert('Villagers Added');
      this.iron();
    })
  }
}

removeIron(){
  if(this.inIron < this.removeForIron){
    alert("You dont have enough villagers to Remove");
  }
  else{
      var temp ={
 "PlayerName":this.name,
	"InIron":this.removeForIron
	
}
this.game.revokeInIron(temp).subscribe(data=>{
  alert('Villagers Removed');
  this.iron();
})
  }
}
assignGold(){
  if(this.goldVillagers < this.assignForGold){
    alert("You dont have enough villagers to assign");
  }
  else{
    var temp ={
 "PlayerName":this.name,
	"InGold":this.assignForGold
	
}
    this.game.assignInGold(temp).subscribe(data=>{
      console.log(data);
      alert('Villagers Added');
      this.gold();
    })
  }
}
removeGold(){
  if(this.inGold < this.removeForGold){
    alert("You dont have enough villagers to Remove");
  }
  else{
      var temp ={
 "PlayerName":this.name,
	"InGold":this.removeForGold
	
}
this.game.revokeInGold(temp).subscribe(data=>{
  alert('Villagers Removed');
  this.gold();
})
  }
}
}
