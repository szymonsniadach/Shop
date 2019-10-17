import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductModel} from '@shared/models/product.model';
import {LoadProducts} from '@core/store/products/products.actions';
import {AppState} from '@core/store/app.state';
import {getProductList} from '@core/store/products/products.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  public products$: Observable<ProductModel[]> = this.store.select(getProductList);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadProducts());
  }

}
