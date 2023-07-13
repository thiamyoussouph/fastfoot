import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {HomeComponent} from "./home/home.component";
import {NewProductComponent} from "./new-product/new-product.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {path:'home', component: HomeComponent},
  {path:'new-product', component: NewProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
