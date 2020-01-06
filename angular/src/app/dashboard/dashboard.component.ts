import { Component, OnInit } from '@angular/core';
import {GreetingsService} from '../../app/greetings.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private greet : GreetingsService ) {
   }

  ngOnInit() {
    // this.greet.getProducts().subscribe(data => {
    //   console.log(data);
    // });
    }



}
