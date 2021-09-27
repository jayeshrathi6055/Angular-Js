import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getValue(value:any){
    console.log(value.value)
  }
  getValueById(value:any){
    console.log(value)
  }
}
