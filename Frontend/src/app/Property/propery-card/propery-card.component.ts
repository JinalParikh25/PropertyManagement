import { Component, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-propery-card',
  templateUrl: './propery-card.component.html',
  styleUrls: ['./propery-card.component.css']
})
export class ProperyCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    Property : any ={
      "Id":1,
      "Name":"Birla House",
      "Type": "House",
      "Price":1200
    }
}
