import {ActionTypes, ProductActions} from '@core/store/products/products.actions';
import {initialProductState, ProductState} from '@core/store/products/product.state';

export const productReducer = (state = initialProductState, action: ProductActions): ProductState => {
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
