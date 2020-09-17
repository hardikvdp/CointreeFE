import { Injectable } from '@angular/core';
import { Cointree } from './cointree';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CointreeService {
   
  currentData : Cointree;  
  currentType : string = 'BTC';
 
  prevType : string;
  prevPrice : number = parseFloat(this.getCookie(this.getPrevCookieeName(this.currentType)));
  
  readonly rootURL = "http://localhost:49268/tradeprice";

  constructor(private http: HttpClient) { }
 
  getCurrentCookieeName(dataType){
    return "curr" + dataType +  "data";
  }

  getPrevCookieeName(dataType){
    return "prev" + dataType +  "data";
  }

  getData(dataType : string){
    this.http.get<Cointree>(this.rootURL + "/" + dataType).subscribe(res => {
        this.currentType=dataType; 
        this.currentData = res;
  
        //Assign Current to Previous Data
        let currentRate = this.getCookie(this.getCurrentCookieeName(dataType));
        if(currentRate != '')
        {          
          if(parseFloat(currentRate) != res.bid)
          {
            this.setCookie(this.getPrevCookieeName(dataType), currentRate, 10);
            if(parseFloat(currentRate) != res.bid) 
              this.setCookie(this.getCurrentCookieeName(dataType), res.bid, 10); 
          } 
        }
        else   
        {
            this.setCookie(this.getPrevCookieeName(dataType), res.bid, 10);
            this.setCookie(this.getCurrentCookieeName(dataType), res.bid, 10);
            
        } 
        this.prevPrice = parseFloat(this.getCookie(this.getPrevCookieeName(dataType)));
    });  
  }

  // getAllData(){
  //   return this.http.get(this.rootURL)
  //    .toPromise().then(res => this.cointreeData = res as Cointree[]);
  // }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}