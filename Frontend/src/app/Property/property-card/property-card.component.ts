import { Component, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IProperty } from '../IProperty.interface';
import { Router, RouterModule } from '@angular/router';


@Component({
  standalone:true,
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  imports :[RouterModule]
})
export class ProperyCardComponent implements OnInit {
  
  @Input() property : IProperty | undefined;
faContactBook: any;
    
  
  constructor() { }

  ngOnInit() {
    this
  }

    
}
