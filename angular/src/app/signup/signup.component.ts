import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {FormBuilder , FormGroup, Validators} from '@angular/forms';
import {emailValidator} from './validator.component';
import {GreetingsService} from '../../app/greetings.service';
import {Router} from '@angular/router';
//template driven forms

import {Signup} from '../signup/signup';
import { GameService } from "app/game.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private greet : GreetingsService , private game: GameService , private router: Router){}
  public  user : Signup;
 ngOnInit(){
  this.user ={
    username:'',
    email:'',
    password:'',
    confPassword:''
  }
 } 
  
  saveUser(u : any){
    console.log(u);
    if(u.username===''||u.email===''||u.password===''||u.confPassword===''){
        // alert('Please enter values')
    }
    else{
      if(u.password !== u.confPassword){
        alert('Please Confirm the password')
      }
      else{
        let temp = {
	"name":u.username,
	"password":u.password,
	"email":u.email
}
  this.game.createUser(temp).subscribe(data=>{
    console.log(data);
    alert(data._body);
    if(data._body==='SignUp Successful ! Please Login'){
    let player=  {
	"PlayerName":u.username
}
    this.game.setUp(player).subscribe(data=>{
      console.log(data);
      let temp = {
        "PlayerName":u.username
      }
      this.game.runUpdate(temp).subscribe(data=>{
        console.log(data);
      })
    })
    localStorage.setItem('PlayerName',u.username);
    this.router.navigate(['/login']);

    }
  })

        }
      }
  }
}
