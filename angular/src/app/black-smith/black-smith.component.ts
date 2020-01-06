import { Component, OnInit } from '@angular/core';
import { CommonService } from "app/common.service";

@Component({
  selector: 'app-black-smith',
  templateUrl: './black-smith.component.html',
  styleUrls: ['./black-smith.component.css']
})
export class BlackSmithComponent implements OnInit {
   private name = localStorage.getItem('PlayerName');
 private player = {
 "PlayerName":this.name
}
public data;
  constructor(private service : CommonService) {
this.dump();
   }
   dump(){
      this.service.blackSmith(this.player).subscribe(data=>{
      this.data = JSON.parse(data._body);
      console.log(this.data);
    })
   }
  ngOnInit() {
    
  }
  upgradeBlack(){
    this.service.blackUpgrade(this.player).subscribe(data=>{
      alert(data._body);
      this.dump();
      console.log(this.data);
    })
  }

  Infantry(){
       let temp = {
 "PlayerName":this.name,
 "food":this.data.i1f,
 "wood":this.data.i1w,
 "iron":this.data.i1i,
 "gold":this.data.i1g
}
    this.service.infantry(temp).subscribe(data=>{
      alert(data._body);
      this.dump();
      console.log(this.data);
    })
  }
  Cavalry(){
       let temp = {
 "PlayerName":this.name,
 "food":this.data.c2f,
 "wood":this.data.c2w,
 "iron":this.data.c2i,
 "gold":this.data.c2g
}
    this.service.cavarly(temp).subscribe(data=>{
      alert(data._body);
      this.dump();
      console.log(this.data);
    })
  }
   Seige(){
     let temp = {
 "PlayerName":this.name,
 "food":this.data.sw3f,
 "wood":this.data.sw3w,
 "iron":this.data.sw3i,
 "gold":this.data.sw3g
}
    this.service.seige(temp).subscribe(data=>{
      alert(data._body);
      this.dump();
      console.log(this.data);
    })
  }

}
