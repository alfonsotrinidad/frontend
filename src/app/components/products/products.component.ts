import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  product={
    nombre: "",
    caracteristica:"",
    email:"",
    pais:"",
    precio:0,
    disponibles:0,
    vendidas:0

  };
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
  console.log(this.productService.getProducts());
  }

getProducts(prducto){
//console.log(){
  this.productService.guardar(this.product);
  console.log(this.product);
}
guardar(producto){
  this.productService.guardar(this.product);
}

}
