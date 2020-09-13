import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { HomeComponent} from "./components/home/home.component";
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SigninComponent } from './components/signin/signin.component';

//guard

import { AuthGuard} from './guards/auth.guard'



const routes: Routes = [
  {    path: '' , component: HomeComponent, pathMatch: "full" },
  {    path: 'products' , component: ProductsComponent, canActivate: [AuthGuard] },
  {    path: 'signup' , component: SignupComponent },
  {    path: 'product-list' , component: ProductListComponent, canActivate: [AuthGuard]  },
  {    path: 'signin' , component: SigninComponent },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
