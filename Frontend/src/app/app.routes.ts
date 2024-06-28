import { Routes } from '@angular/router';
import { PropertyAddComponent } from './Property/property-add/property-add.component';
import { PropertyListComponent } from './Property/Property-list/Property-list.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';

export const routes: Routes = [
    {'path' : '', component:PropertyListComponent},
    {'path' : 'rent-property', component:PropertyListComponent},
    {'path' : 'add-property', component:PropertyAddComponent},
    {'path' : 'property-details/:id', component:PropertyDetailComponent},
    {'path' : '**',component:PropertyListComponent}
];
