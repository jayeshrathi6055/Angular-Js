import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  err = true
  color = 'blue'
  changeColor(){
    this.color = 'orange'
  }
}
