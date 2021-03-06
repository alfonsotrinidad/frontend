import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsService} from './../../services/products.service'
import { Employee } from 'src/models/employee';
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   p :  Employee;
   
   user={
     id:""
   };
template={
  id:""
}
  constructor(
    private ps : ProductsService,
    private r : Router,
   
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
  const name = event.target.name
 
  if(confirm("Desea eliminar " + name))
     this.ps.eliminar(id);
  
     location.reload()
}  

editar(event){
  const id = event.target.id;
    
  
  //   this.ps.actualizar (id);
  
    // location.reload()
}  

}
