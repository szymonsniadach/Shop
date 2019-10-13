import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductBoxComponent} from '@shared/components/product-box/product-box.component';



@NgModule({
  declarations: [
    ProductBoxComponent
  ],
  exports: [
    ProductBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
