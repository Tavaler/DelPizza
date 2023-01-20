import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RestService } from './services/rest.service';
import { RegisterComponent } from './components/register/register.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewerAdminComponent } from './components/viewer-admin/viewer-admin.component';

import { ProductsComponent } from './components/products/products.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { UsersComponent } from './components/users/users.component';

import { CartsComponent } from './components/carts/carts.component';
import { RmsComponent } from './components/rms/rms.component';
import { RmsCreateComponent } from './components/rms-create/rms-create.component';
import { RmsEditComponent } from './components/rms-edit/rms-edit.component';
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';
import { PizzaRmComponent } from './components/pizza-rm/pizza-rm.component';
import { AdminProductsDetailComponent } from './components/admin-products-detail/admin-products-detail.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { PizzaCreateComponent } from './components/pizza-create/pizza-create.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ViewerComponent,
    AdminComponent,
    ViewerAdminComponent,
    ProductsComponent,
    ProductsCreateComponent,
    ViewProductsComponent,
    ProductsEditComponent,
    BlankPageComponent,
    UsersComponent,
    CartsComponent,
    RmsComponent,
    RmsCreateComponent,
    RmsEditComponent,
    ViewProductDetailComponent,
    PizzaRmComponent,
    AdminProductsDetailComponent,
    PizzaComponent,
    PizzaCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(private rest: RestService) {
  //   this.rest.chkLoggedIn()
  // }
}