import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 contacts;
  product={
    nombre: "",
    caracteristica:"",
    email:"",
    precio:0,
    pais:"",
    
    disponibles:0,
    vendidas:0

  };
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
 // console.log(this.productService.getProducts());
 console.log(this.productService.getPaises().subscribe(
  contacts =>{ 
    this.contacts = contacts ;
   console.log(this.contacts);
  }
 )) ;
  }

getProducts(prducto){
//console.log(){
  this.productService.guardar(this.product);
  console.log(this.product);
}
guardar(producto){
 // console.log(this.product);
  this.productService.guardar(this.product)
  .subscribe(res =>{
    console.log(res)
  },
  err => console.log("Errpoorr" , err)
  
  )


}
}
