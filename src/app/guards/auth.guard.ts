import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(
  private service : AuthService,
  private r :Router
  ){
  
  
}

  canActivate(): boolean{
   if (this.service.loggedin()) return true;
   this.r.navigate(['/signin']);
   ;
  }
  
  
}
