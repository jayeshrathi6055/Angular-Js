import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() {}
  // Make getData function
  getData(){
    return {
      name:"Jayesh",
      age:"19"
    }
   }
   
}
