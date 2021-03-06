import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  signUp(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }
  users() {
    return this.http.get(this.URL + '/users');
  }

  signin(user) {
    return this.http.post<any>(this.URL + '/signin', user);
  }

  isloggedin(): Boolean {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else return false;
  }

  actulusuario() {
    if (this.isloggedin) return localStorage.getItem('user');
  }
}
