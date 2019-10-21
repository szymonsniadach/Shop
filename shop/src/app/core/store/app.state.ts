import {initialProductState, IProductState} from '@core/store/products/product.state';

export interface IAppState {
  router?;
  products: IProductState;
}

export const initialAppState: IAppState = {
  products: initialProductState
};
