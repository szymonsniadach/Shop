import {IAppState} from '@core/store/app.state';
import {createSelector} from '@ngrx/store';
import {IProductState} from '@core/store/products/product.state';

const selectProducts = (state: IAppState) => state.products;

export const selectProductList = createSelector(
  selectProducts,
  (state: IProductState) => state.products
);

export const selectProduct = (id: number) => createSelector(
  selectProducts,
  (allProducts) => {
    return allProducts.products.find(product => product.id === id);
  }
);
