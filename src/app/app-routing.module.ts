import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewerAdminComponent } from './components/viewer-admin/viewer-admin.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsCreateComponent } from './components/products-create/products-create.component';
import { ViewProductsComponent } from './components/view-products/view-products.component';
import { ProductsEditComponent } from './components/products-edit/products-edit.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { UsersComponent } from './components/users/users.component';
import { CartsComponent } from './components/carts/carts.component';
import { RmsComponent } from './components/rms/rms.component';
import { RmsCreateComponent } from './components/rms-create/rms-create.component';
import { ViewProductDetailComponent } from './components/view-product-detail/view-product-detail.component';
import { PizzaRmComponent } from './components/pizza-rm/pizza-rm.component';
import { AdminProductsDetailComponent } from './components/admin-products-detail/admin-products-detail.component';
import { PizzaCreateComponent } from './components/pizza-create/pizza-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'viewer' },

  { path: 'viewer-admin', component: ViewerAdminComponent },
  { path: 'products-edit/:id', component: ProductsEditComponent },
  { path: 'products-create', component: ProductsCreateComponent },
  { path:'admin-products-detail-create/:id', component: AdminProductsDetailComponent},

  {path: 'viewer-pizza-rm', component: PizzaRmComponent},
  { path: 'rms', component: RmsComponent },
  { path: 'rms-create', component: RmsCreateComponent },
  { path: 'pizza-create', component: PizzaCreateComponent},
  
  { path: 'carts', component: CartsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'viewer-product', component: ViewProductsComponent },
  { path: 'viewer-product-detail/:id', component: ViewProductDetailComponent },
  { path: 'blank-page', component: BlankPageComponent },


  { path: 'viewer', component: ViewerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: 'viewer'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
