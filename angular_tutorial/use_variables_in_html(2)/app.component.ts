import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTutorial';
  obj = {name:"Jayesh",age:20}
  arr = ["Iron", "Man"]
  greet(){
    return "Hello sir"
  }
}
