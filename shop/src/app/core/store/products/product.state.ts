import {ProductModel} from '@shared/models/product.model';

export interface IProductState {
  products: ProductModel[];
}

export const initialProductState: IProductState = {
  products: null
};
