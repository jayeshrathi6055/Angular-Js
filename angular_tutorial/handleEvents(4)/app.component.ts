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
  //   handle click without parameters
  handleClick(){
    console.log(this.title)
  }
  // handle click with parameters
  handleClickMe(name:any){
    console.log(name)
  }
  // handle keyup event
  handleKeyUp(){
    console.log("key up event")
  }
  // get id of textbox using keyUp
  getValue(id:any){
    console.log(id)
  }
  // Handle Mouse over event
  handleMouseOver(){
    console.log("mouse over event")
  }
  // Handle Mouse Leave event
  handleMouseLeave(){
    console.log("mouse Leave event")
  }
}
