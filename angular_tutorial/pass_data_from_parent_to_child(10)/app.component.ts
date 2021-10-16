import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Jayesh"
  collection = {
    age:20,
    skillf:"coding",
  }
}
