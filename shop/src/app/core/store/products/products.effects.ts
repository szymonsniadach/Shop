import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ProductsApiService} from '@core/services/products-api.service';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EMPTY, Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {IProduct} from '@shared/models/product.model';
import {ActionTypes, GetProducts, GetProductsSuccess} from '@core/store/products/products.actions';


@Injectable()
export class ProductsEffects {

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType<GetProducts>(ActionTypes.GET_PRODUCTS),
    switchMap(() =>
      this.productsApiService.getProducts().pipe(
        map( (products: IProduct[]) =>
          new GetProductsSuccess(products)
        ),
        catchError(() => EMPTY)
      )
    )
  );

  constructor(private actions$: Actions,
              private productsApiService: ProductsApiService) {}
}
