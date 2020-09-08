import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    email:"",
    password:""
  };
  constructor(
    private authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.signUp());
  }

  signUp(){ 
   console.log(this.user);
     this.authService.signUp(this.user)
     .subscribe(
       res =>{
       // localStorage.setItem("token", res.token)
       // localStorage.setItem("user", res.token)
        this.router.navigate (['/signin']);
      },
       err => console.log(err)
     )

  }

}
