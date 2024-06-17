  import { Component, OnInit } from '@angular/core';
import { ProperyCardComponent } from "../propery-card/propery-card.component";

  @Component({
    standalone: true,
    selector: 'app-Property-list',
    templateUrl: './Property-list.component.html',
    styleUrls: ['./Property-list.component.css'],
    imports: [ProperyCardComponent]
})
  export class PropertyListComponent implements OnInit {

  Properties : Array<any> = [
      {
      "Id":1,
      "Name":"Birla House",
      "Type": "House",
      "Price":1200
      },
      {
        "Id":2,
        "Name":"Erosa Villa",
        "Type": "House",
        "Price":1200
      },
      {
        "Id":3,
        "Name":"Birla House",
        "Type": "House",
        "Price":1200
      },
      {
        "Id":4,
        "Name":"Birla House",
        "Type": "House",
        "Price":1200
      },
      {
        "Id":5,
        "Name":"Birla House",
        "Type": "House",
        "Price":1200
      },
      {
        "Id":6,
        "Name":"Birla House",
        "Type": "House",
        "Price":1200
      },
    ]

    constructor() { }

    ngOnInit() {
    }

  }
