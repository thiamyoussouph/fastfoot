import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  public productform!: FormGroup;

  constructor(private fb: FormBuilder,private productService:ProductService) {

    };

ngOnInit() {
  this.productform = this.fb.group({
    name: this.fb.control('',[Validators.required]),
    price: this.fb.control(''),
    checked: this.fb.control(false),
  });
}

  saveproduct() {
let product :Product= this.productform.value;
this.productService.saveProduct(product).subscribe({
  next: value => {
alert('product saved');
  },error: error => {
    console.log(error);
  }
});
}


}
