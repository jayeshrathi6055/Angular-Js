import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // It is neccessary to set type and default value of any props
  @Input() data: string | undefined;
  @Input() about = { age: 0, skillf: "Nothing" };

  ngOnInit(): void {
    console.log(this.data)
    console.log(this.about)
  }
}
