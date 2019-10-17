import {ProductModel} from '@shared/models/product.model';

export interface ProductState {
  products: ProductModel[];
}

export const initialProductState: ProductState = {
  products: null
};
