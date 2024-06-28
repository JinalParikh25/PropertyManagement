import { Component, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent {
     id : number ;
    constructor(private activatedRoute: ActivatedRoute, private route: Router ) {
     this.id =  Number(this.activatedRoute.snapshot.paramMap.get('id'));

     this.activatedRoute.paramMap.subscribe((param) => {
        this.id = Number(param.get('id'));
     });

    }

    backButtonClicked(){
      this.route.navigateByUrl('/')
    }

    //navigateByUrl uses string and the path must be absolute and start with “/”. 
    // navigate use relative path relative path means append in current path
    // without / path consider as a relative path so it will append to the url

    nextButtonClicked(){
     
      this.route.navigate(['/','property-details', this.id]);
    }
}
