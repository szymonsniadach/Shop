import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {httpInterceptorProviders} from './core/interceptors/interceptors';
import { HeaderComponent } from './core/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductBoxComponent } from './shared/components/product-box/product-box.component';
import {ProductsModule} from '@modules/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ProductsModule
  ],
  providers: [httpInterceptorProviders],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
