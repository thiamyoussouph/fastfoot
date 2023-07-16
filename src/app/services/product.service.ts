import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  getProducts():Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:8089/products')
  }
  checkProduct(product: Product):Observable<Product>  {
    return this.http.patch<Product>(`http://localhost:8089/products/${product.id}`,
      {checked: !product.checked})
  }
  deleteproduct(product:Product){
    return this.http.delete(`http://localhost:8089/products/${product.id}`);
  }
  saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`http://localhost:8089/products`,
      product)
  }

search(keyword:string):Observable<Array<Product>> {
  return this.http.get<Array<Product>>(`http://localhost:8089/products?name_like=${keyword}`)
}
}
