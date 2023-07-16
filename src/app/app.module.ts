import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {MenuModule} from "primeng/menu";
import {BreadcrumbComponent} from "./breadcrumb/breadcrumb.component";
import {BreadcrumbModule} from "primeng/breadcrumb";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";
import { DataViewLayoutOptions } from 'primeng/dataview';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import { MessageModule } from 'primeng/message';
import {ProductService} from "./services/product.service";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {PaginatorModule} from "primeng/paginator";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    HomeComponent,
    ProductsComponent,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    BreadcrumbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DataViewModule,
    RatingModule,
    TagModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TableModule,
    FileUploadModule,
    ToastModule,
    MessageModule,
    ConfirmDialogModule,
    PaginatorModule,
    RadioButtonModule,
    DialogModule,
    BrowserAnimationsModule

  ],
  providers: [
    ProductService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
