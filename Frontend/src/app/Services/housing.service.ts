import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProperty } from '../Property/IProperty.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  gtAllProperties(SellRent : number) : Observable<IProperty[]>{
    return this.http.get<IProperty[]>('data/properties.json').pipe(
      map(
        json_data => {
          const propertyArray : Array<IProperty> = [];
         
          for (const index in json_data){
            if(json_data[index] && json_data[index].SellRent === SellRent)
            propertyArray.push(json_data[index]);
          }
          return propertyArray;
        }

      )

    )
  }
}
