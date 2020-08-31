import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsService} from './../../services/products.service'
import { Employee } from 'src/models/employee';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { EditproductComponent} from '../editproduct/editproduct.component';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   p :  Employee;
   filtrado = [];
   user={
     id:""
   };
template={
  id:""
}
  constructor(
    private ps : ProductsService,
    private r : Router,
    private t: EditproductComponent,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    console.log(this.getEmployees());
   
  }
  getEmployees(){
  this.ps.getProducts().subscribe(res =>{
    this.p = res;
      console.log(this.p);
      return this.p;
   }
  )
   
  return  this.ps.getProducts(); 


}
borrar(event){
  const id = event.target.id
 
  if(confirm("Clicka en Aceptar o Cancelar:  " + id))
     this.ps.eliminar(id);
  
     location.reload()
}  

editar(event){
  const id = event.target.id;
    
  
  //   this.ps.actualizar (id);
  
    // location.reload()
}  

}
