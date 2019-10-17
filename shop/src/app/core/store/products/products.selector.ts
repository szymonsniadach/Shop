import {AppState} from '@core/store/app.state';
import {createSelector} from '@ngrx/store';
import {ProductState} from '@core/store/products/product.state';

const getProducts = (state: AppState) => state.products;

export const getProductList = createSelector(
  getProducts,
  (state: ProductState) => state.products
)
