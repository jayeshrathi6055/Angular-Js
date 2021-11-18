import { Injectable } from '@angular/core';

// For Fetch API
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http:HttpClient) {}
  // getData form api
  public getData(){
    let url = "https://jsonplaceholder.typicode.com/todos/"
    return this.http.get(url);
   }

}
