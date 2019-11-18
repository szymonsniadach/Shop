import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IProduct} from '@shared/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBoxComponent implements OnInit {

  @Input() product: IProduct = null;

  constructor() { }

  ngOnInit() {
  }

}
