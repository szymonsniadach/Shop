import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProduct} from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  constructor(private http: HttpClient) { }

  public getProducts() {
    return this.http.get<IProduct[]>('https://api.myjson.com/bins/t3y4n');
  }
}
