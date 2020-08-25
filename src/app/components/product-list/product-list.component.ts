import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ProductsService} from './../../services/products.service'
import { Employee } from 'src/models/employee';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   p :  Employee;

  constructor(
    private ps : ProductsService
  ) { }

  ngOnInit(): void {
    console.log(this.getEmployees());
   
  }
  getEmployees(){
 /* this.ps.getProducts().subscribe(res =>{
    this.p = res;
      console.log(this.p);
      return this.p;
   }
   ++
   
  //return  this.ps.getProducts(); 
  }*/

}}
