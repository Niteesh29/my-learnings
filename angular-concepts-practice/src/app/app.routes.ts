import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OwnerDetailsComponent } from './components/owner-details/owner-details.component';
import { AddProductComponent } from './components/add-product/add-product.component';

export const routes: Routes = [
    {
        path: '', component:DashboardComponent, pathMatch:'full'
    },
    {
       path: 'owner-details', component: OwnerDetailsComponent
    },
    {
        path: 'product', component: AddProductComponent
    }
];
