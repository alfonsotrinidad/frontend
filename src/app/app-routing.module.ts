import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//componentes
import { HomeComponent} from "./components/home/home.component";
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductListComponent } from './components/product-list/product-list.component';




const routes: Routes = [
  {    path: '' , component: HomeComponent, pathMatch: "full" },
  {    path: 'products' , component: ProductsComponent },
  {    path: 'signup' , component: SignupComponent },
  {    path: 'product-list' , component: ProductListComponent  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
