import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";
import {Observable} from "rxjs";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:Observable<Array<Product>>;
  produict:Array<Product>;
  public  keyword: string = ''
  constructor(private productService:ProductService) {

  }
  ngOnInit(): void {


    this.getProducts()


    }
    getProducts(){
    /*
    this.productService.getProducts()
      .subscribe( {
  next: data =>{this.products = data
  },
error: error => {
    console.log(error);
  }
});*/
      this.products=this.productService.getProducts()
  }

  handelcheck(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next: updatedProduct => {

       product.checked =!product.checked;
      }
    });
  }

  deleteProduct(product: Product) {
this.productService.deleteproduct(product).subscribe({
  next:value=>{
    this.getProducts()
  }
  }
)

  }
  search() {
    this.productService.search(this.keyword).subscribe({
      next: data => {
        this.produict= data
      }
    })

  }}
