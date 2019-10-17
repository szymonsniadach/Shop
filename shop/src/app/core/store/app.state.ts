import {initialProductState, ProductState} from '@core/store/products/product.state';

export interface AppState {
  router?;
  products: ProductState;
}

export const initialAppState: AppState = {
  products: initialProductState
};
