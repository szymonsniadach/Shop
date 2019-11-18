import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {IAppState} from '@core/store/app.state';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {selectProduct} from '@core/store/products/products.selector';
import {GetProducts} from '@core/store/products/products.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  public product$ = this.store.pipe(select(selectProduct(Number(this.route.snapshot.params.id))));
  private subs: Subscription = new Subscription();

  constructor(private store: Store<IAppState>,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.store.dispatch(new GetProducts());
    this.subs.add(this.product$.subscribe(resp => console.log(resp)));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
