import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  standalone:true,
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class ProperyCardComponent implements OnInit {

  @Input() property : any
faContactBook: any;
  
  constructor() { }

  ngOnInit() {
  }

    
}
