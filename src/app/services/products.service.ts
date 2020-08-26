import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Employee } from 'src/models/employee';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  p :  Employee;
  private URL = "http://localhost:3000";
  constructor( private http: HttpClient) { }

  getProducts(){
    return   this.http.get<Employee>(this.URL + "/products");
    // return 'hola';
  //return    this.p;
    //return  this.p ;
      
  
  }
  guardar(producto){
    console.log(producto);
    return this.http.post<any>(this.URL + "/products/guardar",producto);
  }
}
