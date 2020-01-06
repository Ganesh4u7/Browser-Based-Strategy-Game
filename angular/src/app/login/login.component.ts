import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GreetingsService} from '../greetings.service';
import {CommonService} from '../common.service';
import {Login} from '../login/login';
import { GameService } from "app/game.service";
import{Router } from '@angular/router';
import { NavbarComponent } from "app/navbar/navbar.component";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user :Login;  
public data : Array<any>;
  constructor(private nav : NavbarComponent,private greet:GreetingsService,private common : CommonService , private game:GameService , private router:Router) { }

  ngOnInit() {
   this.user ={
     name :'',
     password :''
   }
  }
   loginUser (loginForm:any) {
    // this.common.sendMessage(true);
    // this.greet.getUser(loginForm.value).subscribe( data =>{
    //    this.data = data;
    // console.log(this.data);
       
    // });
    console.log(loginForm);
    // localStorage.setItem('auth','yes');
    let temp ;
    if(loginForm.name !=='' && loginForm.password!==''){
      
    this.game.userLogin(loginForm).subscribe(async data=>{
    temp = JSON.parse(data._body);
      
      if(temp.message ==='User Not Found'){
      alert(temp.message);
    }
    else if(temp.success==false){
      console.log(temp);
      alert(temp.message);
    }
    else{
      // alert(loginForm.name);
      localStorage.setItem('auth','yes');
      localStorage.setItem('PlayerName',loginForm.name);
      let temp ={
        "PlayerName":loginForm.name
      }
      this.game.runUpdate(temp).subscribe(data=>{
        console.log(data);
      })
      this.nav.logged();
      this.nav.getPlayerData();
      this.router.navigate(['/resources']);
    }
    
    })
   }
   }
}
