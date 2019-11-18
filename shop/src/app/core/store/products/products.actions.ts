import {Action} from '@ngrx/store';
import {IProduct} from '@shared/models/product.model';

export enum ActionTypes {
  GET_PRODUCTS = '[Products] Get products from server',
  GET_PRODUCTS_SUCCESS = '[Products] Get products success',
  GET_PRODUCT = '[Products] Get product',
  GET_PRODUCT_SUCCESS = '[Products] Get product success'
}

export class GetProducts implements Action {
  readonly type = ActionTypes.GET_PRODUCTS;
}

export class GetProductsSuccess implements Action {
  readonly type = ActionTypes.GET_PRODUCTS_SUCCESS;

  constructor(public payload: IProduct[]) {}
}

export class GetProduct implements Action {
  readonly type = ActionTypes.GET_PRODUCT;

  constructor(public payload: number) {}
}

export class GetProductSuccess implements Action {
  readonly type = ActionTypes.GET_PRODUCT_SUCCESS;

  constructor(public payload: IProduct) {}
}

// export class LoadProductsFail implements Action {
//   readonly type = ActionTypes.LOAD_PRODUCTS_FAIL;
//
//   constructor(public payload: string) {}
// }



export type ProductActions = GetProducts | GetProductsSuccess | GetProduct | GetProductSuccess;
