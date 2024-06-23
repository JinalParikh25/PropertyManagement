import { Component, OnInit } from '@angular/core';
import { ProperyCardComponent } from "../property-card/property-card.component";
import { HousingService } from '../../Services/housing.service';
import { IProperty } from '../IProperty.interface';


  @Component({
    standalone: true,
    selector: 'app-Property-list',
    templateUrl: './Property-list.component.html',
    styleUrls: ['./Property-list.component.css'],
    imports: [ ProperyCardComponent]
})
  export class PropertyListComponent implements OnInit {


  properties : Array<IProperty> = [];

    constructor(private housingService: HousingService) { }

    ngOnInit() {
      this.housingService.gtAllProperties().
        subscribe(
        (data) =>{
          this.properties = data;
        }, (error) => {
          console.log(error)
        }
        
     );
    }

  }
