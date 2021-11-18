import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

// Import user Data Service
import {UserDataService} from './user-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = ""
  // Make private constructor and take data from services
  constructor(private user:UserDataService){
    this.name = user.getData().name
  }
}
