import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProductsApiService} from '@core/services/products-api.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {ProductModel} from '@shared/models/product.model';
import {ActionTypes, LoadProducts, LoadProductsSuccess} from '@core/store/products/products.actions';


@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType<LoadProducts>(ActionTypes.LOAD_PRODUCTS),
    switchMap(() =>
      this.productsApiService.getProducts().pipe(
        map( (products: ProductModel[]) =>
          new LoadProductsSuccess(products)
        ),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions,
              private productsApiService: ProductsApiService) {}
}
