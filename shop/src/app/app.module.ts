import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {httpInterceptorProviders} from './core/interceptors/interceptors';
import { HeaderComponent } from './core/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ProductsModule} from '@modules/products/products.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {ProductReducer} from '@core/state/products/products.reducer';
import {ProductsEffects} from '@core/state/products/products.effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({products: ProductReducer}), // TODO: add one reducer for all
    EffectsModule.forRoot([ProductsEffects]), // TODO: add one effects for all
    FontAwesomeModule,
    ProductsModule,
  ],
  providers: [httpInterceptorProviders],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
