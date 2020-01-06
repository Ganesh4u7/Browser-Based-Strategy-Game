import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {Http,RequestOptions,Response, Headers } from '@angular/http';


@Injectable()
export class CommonService {
private subject = new Subject<any>();
private barracKsUrl = 'http://localhost:3000/R/Barracks';
private upgradeBaracs = 'http://localhost:3000/BU/UpgradeBR';

private stableURl = 'http://localhost:3000/R/Stable';
private upgradeStableUrl ='http://localhost:3000/BU/UpgradeST';

private workShopUrl = 'http://localhost:3000/R/Workshop';
private upgradeWorkshopUrl = 'http://localhost:3000/BU/UpgradeWS';

private blackSmithUrl = 'http://localhost:3000/R/BlackSmith';
private blackupgradeUrl = 'http://localhost:3000/BU/UpgradeBS'
private infantryUrl = 'http://localhost:3000/TU/Infantry';
private cavalryUrl = 'http://localhost:3000/TU/Cavalry';
private seigeUrl = 'http://localhost:3000/TU/SeigeWeapons';

private troop1 = 'http://localhost:3000/BT/BarracksTroop1';
private troop2 = 'http://localhost:3000/BT/BarracksTroop2';
private troop3 = 'http://localhost:3000/BT/BarracksTroop3';

private stable1 = 'http://localhost:3000/ST/StableTroop1';
private stable2 = 'http://localhost:3000/ST/StableTroop2';
private stable3 = 'http://localhost:3000/ST/StableTroop3';
private work1 = 'http://localhost:3000/WT/WorkshopTroop1';
private work2 = 'http://localhost:3000/WT/WorkshopTroop2';
private work3 = 'http://localhost:3000/WT/WorkshopTroop3';

private town = 'http://localhost:3000/R/TownCenter';
private townUpgradeUrl = 'http://localhost:3000/BU/UpgradeTC';
private createVillagersUrl = 'http://localhost:3000/VC/CreateVillager';

private watchTowerUrl ='http://localhost:3000/R/WatchTower';
private upgradeWatch = 'http://localhost:3000/BU/UpgradeWT';

private attackUrl = 'http://localhost:3000/R/Attack';
private reinforceUrl = 'http://localhost:3000/R/Reinforcement';
private troopsUrl = 'http://localhost:3000/R/TM';

private nav = 'http://localhost:3000/R/HomePage';
  constructor( private http : Http) { }
  sendMessage(data: any) {
        this.subject.next(data);
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
     barracs(body: Object)  :Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.barracKsUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

    }
    upgradeBarracs(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.upgradeBaracs, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

    stable(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.stableURl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

     upgradeStable(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.upgradeStableUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
     workShop(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.workShopUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

     upgradeworkShop(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.upgradeWorkshopUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
     blackSmith(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.blackSmithUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
     cavarly(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.cavalryUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
     infantry(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.infantryUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    seige(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.seigeUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    blackUpgrade(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.blackupgradeUrl, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    createTroop1(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.troop1, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    createTroop2(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.troop2, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    createTroop3(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.troop3, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    stableTroop1(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.stable1, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    stableTroop2(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.stable2, body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    stableTroop3(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.stable3 ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

    workShop1(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.work1 ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    workShop2(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.work2 ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
    workShop3(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.work3 ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

     navData(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.nav ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }


     townCenter(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.town ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

     upgradeTown(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.townUpgradeUrl ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

    createVillager(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.createVillagersUrl ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

       attack(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.attackUrl ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
       reinforce(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.reinforceUrl ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

     watchTower(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.watchTowerUrl ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

     upgradeWatchTower(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.upgradeWatch ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }

     troops(body: Object) : Observable<any>{
        let bodyString = JSON.stringify(body);
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
      return this.http.post(this.troopsUrl ,body, options) // ...using post request
                         .map((res:Response) => res) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any

  
    }
}
