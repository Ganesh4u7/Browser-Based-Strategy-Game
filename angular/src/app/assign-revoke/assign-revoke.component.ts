import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';
@Component({
  selector: 'app-assign-revoke',
  templateUrl: './assign-revoke.component.html',
  styleUrls: ['./assign-revoke.component.css']
})
export class AssignRevokeComponent implements OnInit {

 private assignInWood:Number  = null;
  private assignName:Number  = null;
  private revokeInWood:Number  = null;
  private revokeName:Number  = null;
  private dataObject = {}
  constructor( private game : GameService) { }

  ngOnInit() {
  }

  assign(){
   this.dataObject =  {
	"PlayerName":this.assignName,
	"InWood":this.assignInWood
}
    this.game.assignInWood(this.dataObject).subscribe(data=>{
      console.log(data._body);
      this.ClearValues()
    });
  }

  revoke(){
  this.game.revokeInWood(this.dataObject).subscribe(data=>{
      console.log(data._body);
      this.ClearValues()
    });
  } 
   ClearValues(){
   this.assignInWood, this.assignName , this.revokeInWood , this.revokeName = null;
  }
}
