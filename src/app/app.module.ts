import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { SignupComponent } from './components/signup/signup.component';

//servicios

import { AuthService} from './services/auth.service'
import { ProductsService} from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterPipe } from './pipes/filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    SignupComponent,
    ProductListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
