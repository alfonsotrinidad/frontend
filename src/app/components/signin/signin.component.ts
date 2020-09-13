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
 
    this.authService.signin(this.user)
    .subscribe( res =>{ 
         this.contact = res;
           localStorage.setItem("token", res.token)
           localStorage.setItem("user", res.user)
           this.router.navigate (['/products']);
         },
      error => {console.log("Error  :"+error)
       }
      )
      
    }
}
