import { Injectable } from '@angular/core';
import { Http, Response, Headers , RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {RouterModule, Routes ,Router } from '@angular/router';
import {CanActivate} from '@angular/router';

@Injectable()
export class GameService  implements CanActivate{
  

  constructor(private http : Http ,private router :Router ) { }

  private cutUserURL = 'http://localhost:3000/MP/CutResources';
  private sendResources = 'http://localhost:3000/MP/SendResources';
  private marketPlaceURL = 'http://localhost:3000/R/MarketPlace';
//Wood
  private rWood = 'http://localhost:3000/R/Wood';
  private assignWood = 'http://localhost:3000/VA/UWood';
  private revokeWood = 'http://localhost:3000/VR/UWood';

  //Food
  private rFood = 'http://localhost:3000/R/Food';
   private assignFood = 'http://localhost:3000/VA/UFood';
  private revokeFood = 'http://localhost:3000/VR/UFood';

  //Iron

  private rIron = 'http://localhost:3000/R/Iron';
  private assignIron = 'http://localhost:3000/VA/UIron';
  private revokeIron = 'http://localhost:3000/VR/UIron';

//Gold
  private rGold = 'http://localhost:3000/R/Gold';
  private assignGold = 'http://localhost:3000/VA/UGold';
  private revokeGold = 'http://localhost:3000/VR/UGold';

//Authentication
private login = 'http://localhost:3000/user/login';
private create='http://localhost:3000/user/create';
private setupUrl ='http://localhost:3000/DB/Setup';

private runUpdateUrl = 'http://localhost:3000/R/RU';
private attackingUrl = 'http://localhost:3000/R/AttackingRank';
private defenceUrl = 'http://localhost:3000/R/DefenseRank';

  marketPlace(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.marketPlaceURL, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

   cutUser(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.cutUserURL, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    sendResource(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.sendResources, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    assignInWood(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.assignWood, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    revokeInWood(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.revokeWood, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

     Wood(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.rWood, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    Food(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.rFood, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

     assignInFood(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.assignFood, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    revokeInFood(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.revokeFood, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

   Iron(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.rIron, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    assignInIron(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.assignIron, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
  revokeInIron(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.revokeIron, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

Gold(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.rGold, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
    assignInGold(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.assignGold, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
     revokeInGold(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.revokeGold, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

    canActivate(){
      if(localStorage.getItem('auth')==='yes')
      return true;
      else{
        this.router.navigate(['/login']);
      return false;

      }
    }
    
   userLogin(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.login, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

      createUser(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.create, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

      setUp(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.setupUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }

        runUpdate(body: Object)  :Observable<any>{
        console.log(body);
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.runUpdateUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
      attacking()  :Observable<any>{
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.get(this.attackingUrl, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
      defence()  :Observable<any>{
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.get(this.defenceUrl, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
}
