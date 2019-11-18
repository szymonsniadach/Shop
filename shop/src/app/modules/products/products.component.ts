import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import {IProduct} from '@shared/models/product.model';
import {GetProducts} from '@core/store/products/products.actions';
import {IAppState} from '@core/store/app.state';
import {selectProductList} from '@core/store/products/products.selector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products$: Observable<IProduct[]> = this.store.pipe(select(selectProductList));
  subs: Subscription = new Subscription();

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    // this.subs.add(this.products$.subscribe(resp => console.log(resp)));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
