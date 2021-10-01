import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show = false
  answer = "yes"
  color = "green"
  arr = [1,5,9,7,8,6,3]
  arr_of_obj = [
    {
      name:"Jay",
      age:19,
      email:"abc@email.com"
    },
    {
      name:"Steve",
      age:21,
      email:"def@email.com"
    },
    {
      name:"Tony",
      age:23,
      email:"ghi@email.com"
    },
    {
      name:"Bruce",
      age:25,
      email:"jkl@email.com"
    },
  ]
}
