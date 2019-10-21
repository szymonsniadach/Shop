import {ActionTypes, ProductActions} from '@core/store/products/products.actions';
import {initialProductState, IProductState} from '@core/store/products/product.state';

export const productReducer = (state = initialProductState, action: ProductActions): IProductState => {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS:
      return {
        ...state
      };
    case ActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};
