import {IProduct} from '@shared/models/product.model';

export interface IProductState {
  products: IProduct[];
  selectedProduct: IProduct;
}

export const initialProductState: IProductState = {
  products: null,
  selectedProduct: null
};
