import {ActionTypes, ProductActions} from '@core/store/products/products.actions';
import {initialProductState, IProductState} from '@core/store/products/product.state';

export const productReducer = (state = initialProductState, action: ProductActions): IProductState => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS:
      return {
        ...state
      };
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload
      };
    case ActionTypes.GET_PRODUCT:
      return {
        ...state,
      };
    case ActionTypes.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        selectedProduct: action.payload
      };
    default:
      return state;
  }
};
