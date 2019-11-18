import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductDetailsComponent} from '@modules/products/product-details/product-details.component';


const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'produkt/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(productsRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
