import { Component, OnInit } from '@angular/core';
import { ProperyCardComponent } from "../property-card/property-card.component";
import { HousingService } from '../../Services/housing.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';


  @Component({
    standalone: true,
    selector: 'app-Property-list',
    templateUrl: './Property-list.component.html',
    styleUrls: ['./Property-list.component.css'],
    imports: [ ProperyCardComponent]
})
  export class PropertyListComponent implements OnInit {


  properties : Array<IProperty> = [];
    sellRent = 1;
    constructor(private housingService: HousingService, private route: ActivatedRoute ) { }

    ngOnInit() {
      if(this.route.snapshot.url.toString()){
        this.sellRent = 2;
      }

      this.housingService.gtAllProperties(this.sellRent).
        subscribe(
        (data) =>{
          this.properties = data;
        }, (error) => {
          console.log(error)
        }
        
     );
    }

  }
