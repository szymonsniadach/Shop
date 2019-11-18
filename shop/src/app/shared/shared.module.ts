import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductBoxComponent} from '@shared/components/product-box/product-box.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ProductBoxComponent
  ],
  exports: [
    ProductBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
