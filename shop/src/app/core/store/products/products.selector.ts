import {IAppState} from '@core/store/app.state';
import {createSelector} from '@ngrx/store';
import {IProductState} from '@core/store/products/product.state';

const getProducts = (state: IAppState) => state.products;

export const getProductList = createSelector(
  getProducts,
  (state: IProductState) => state.products
)
