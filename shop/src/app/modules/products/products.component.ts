import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ProductModel} from '@shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  public products$: Observable<ProductModel[]> = this.store.select(store => store.products.products); // TODO: change name in model

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
