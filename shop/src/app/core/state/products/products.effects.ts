import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProductsApiService} from '@core/services/products-api.service';
import * as productActions from '@core/state/products/products.actions';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {EMPTY, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {ProductModel} from '@shared/models/product.model';


@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType<productActions.LoadProducts>(productActions.ActionTypes.LOAD_PRODUCTS),
    switchMap((action: productActions.LoadProducts) =>
      this.productsApiService.getProducts().pipe(
        map( (products: ProductModel[]) =>
          new productActions.LoadProductsSuccess(products)
        ),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions,
              private productsApiService: ProductsApiService) {}
}
