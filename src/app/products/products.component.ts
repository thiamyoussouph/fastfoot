import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MenuItem, MessageService,} from "primeng/api";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product.model";
import {Observable} from "rxjs";




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class ProductsComponent implements OnInit{
  products:Array<Product>=[];

  productDialog: boolean = false;
  public  keyword: string = ''
  items: MenuItem[] | undefined;
  product!: Product;

  selectedProducts!: Product[] | null;

  submitted: boolean = false;

  statuses!: any[];

  Delete: any;

  constructor(private productService:ProductService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {

  }
  ngOnInit(): void {


    this.getProducts()





    }

    getProducts(){

    this.productService.getProducts()
      .subscribe( {
  next: data =>{this.products = data

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' }
    ];
  },
error: error => {
    console.log(error);
  }
});

  }

  handelcheck(product: Product) {
    this.productService.checkProduct(product).subscribe({
      next: updatedProduct => {

       product.checked =!product.checked;
      }
    });
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this product?',
      accept: () => {
        this.productService.deleteproduct(product).subscribe({
          next: () => {
            this.products = this.products.filter(element => element.id !== product.id);
            this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
          }
        });




      }
    });
  }
  search() {
    this.productService.search(this.keyword).subscribe(
      {
        next: value => {
          this.products = value;

          console.log(value)
        }
      })

  }




  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteSelectedProducts() {

  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  openNew() {
    this.product = {checked: false, id: 0};
    this.submitted = false;
    this.productDialog = true;
  }

  saveProduct() {
    this.productService.saveProduct(this.product).subscribe({
      next: savedProduct => {
        this.productDialog = false;
        this.submitted = true;
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        this.getProducts()

      }
    });

    }



  getSeverity(inventoryStatus: any) {
    return undefined;
  }
}
