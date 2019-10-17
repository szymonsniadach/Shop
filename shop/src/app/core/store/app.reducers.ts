import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '@core/store/app.state';
import {productReducer} from '@core/store/products/products.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  products: productReducer
};
