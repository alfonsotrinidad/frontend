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
    //console.log(this.user);
  }

  signin(){ 
 
  return   this.authService.signin(this.user)
     .subscribe(
       (res) =>{ 
         this.contact = res;
         console.log("Esto susbcribe   " + res );
           // this.router.navigate (['/products']);
      },
      err => console.log(err)
     );}
}
