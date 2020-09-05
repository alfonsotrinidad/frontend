import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  contact;
  user={
    user:"",
    password:""
  };
  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
 this.signin()
  }

  signin(){ 
 
  return   this.authService.signin(this.user)
     .subscribe(
       (res) =>{ 
         this.contact = res;
         console.log("Esto susbcribe   " + res );
         console.log(this.contact);
           // this.router.navigate (['/products']);
      },
  
     );}
}
