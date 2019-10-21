import {ActionReducerMap} from '@ngrx/store';
import {IAppState} from '@core/store/app.state';
import {productReducer} from '@core/store/products/products.reducer';

export const appReducers: ActionReducerMap<IAppState> = {
  products: productReducer
};
