import {Action} from '@ngrx/store';
import {ProductModel} from '@shared/models/product.model';

export enum ActionTypes {
  LOAD_PRODUCTS = '[Products] Load products from server',
  LOAD_PRODUCTS_SUCCESS = '[Products] Load products success'
}

export class LoadProducts implements Action {
  readonly type = ActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
  readonly type = ActionTypes.LOAD_PRODUCTS_SUCCESS;

  constructor(public payload: ProductModel[]) {}
}

// export class LoadProductsFail implements Action {
//   readonly type = ActionTypes.LOAD_PRODUCTS_FAIL;
//
//   constructor(public payload: string) {}
// }



export type ProductActions = LoadProducts | LoadProductsSuccess;
