import { Component } from '@angular/core';

// Interface is used to defined the type of a data require
interface datatype{
  name:string,
  age:number,
  indian:boolean|string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getData(){
    const data:datatype = {
      name:"Jayesh",
      age:19,
      indian:"yes"
    }
    return data
  }

  // We can also make a new file to defined our all interface
}
