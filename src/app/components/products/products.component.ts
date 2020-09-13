import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../services/products.service'
import { AuthService } from '../../services/auth.service';
import { Router} from '@angular/router'

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
  public user: String ="";
  constructor(
    private productService: ProductsService,
    private autth: AuthService,
    private r : Router
  ) { }

  ngOnInit(): void {
 // console.log(this.productService.getProducts());
 this.user = this.autth.actulusuario();
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

salir(){
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  this.r.navigate(['/signin'])

}
}
