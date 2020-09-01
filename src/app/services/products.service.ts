import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Employee } from 'src/models/employee';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  p :  Employee;
  private URL = "http://localhost:3000";
  private contacts;
  constructor( private http: HttpClient, private r:Router) { }

  getProducts(){
    return   this.http.get<Employee>(this.URL + "/products");
   
      
  
  }
  guardar(producto){
     return this.http.post<any>(this.URL + "/products/guardar" ,producto);

  }


  eliminar(id ){
    return  this.http.delete(this.URL + "/products/delete/"+id,id).subscribe(()=>{
   })  ;

  }

  actualizar(id){
    alert("Actualizar..."+id);
  }
  getPaises()
  {

   
   return  this.http.get("https://restcountries.eu/rest/v2/all" );
     
  }
}
