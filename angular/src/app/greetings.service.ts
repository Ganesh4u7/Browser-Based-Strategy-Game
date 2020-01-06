import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GreetingsService {

  constructor(private http : Http) {}
  
   private saveuserUrl = 'http://localhost:3000/users/saveuser';
   private getTestUrl ='http://localhost:3000/villagers/';
   private createVillagerUrl = 'http://localhost:3000/villagers/createVillager/';
   private loginUser = 'http://localhost:3000/users/login';

    getComments() : Observable<any> {
         // ...using get request
         return this.http
      .get(this.saveuserUrl)
      .map(res => res.json());

     }
     getComment() :String{
     return "Good morning";
    }
  
    saveUser(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.saveuserUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    getTest() :Observable<any>{
        // let bodyString = JSON.stringify(body);
        const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGF5bG9hZCI6eyJpZCI6IjVhNWVhN2I0NjZiNjA3MzBlODQ4NTU3YyJ9LCJpYXQiOjE1MTkwNTkzODB9.ozYMfrg5olKiLANa0UgCZ44N7sKV3RLZmSN0AnJconU';
        let headers      = new Headers({ 'Content-Type': 'application/json' ,'Authorization':token}); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.get(this.getTestUrl,options)
        .map((res:Response)=> {
         return  res.json();
       }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
    }
    
    createVillage(demo :any) :Observable<any>{
      console.log(demo);
      const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyUGF5bG9hZCI6eyJpZCI6IjVhNWVhN2I0NjZiNjA3MzBlODQ4NTU3YyJ9LCJpYXQiOjE1MTkwNTkzODB9.ozYMfrg5olKiLANa0UgCZ44N7sKV3RLZmSN0AnJconU';
      let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

      return this.http.post(this.createVillagerUrl,demo,options)
      .map((res:Response)=>{
        return res.json();
      }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));      
    }

    getUser(user : any) :Observable<any>{
      console.log(user);
      let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

      return this.http.post(this.loginUser,user,options)
      .map((res:Response)=>{
        return res.json();
      }).catch((error:any) => Observable.throw(error.json().error || 'Server error')); 
    }
}
