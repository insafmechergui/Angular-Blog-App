import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _registerUrl = "http://localhost:8080/register";
  private _loginUrl = "http://localhost:8080/login"

  currentUser = {};

  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  //register
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  //login
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)

  }


  // get isLoggedIn() {
  //   let authToken = localStorage.getItem('access_token');
  //   return (authToken !== null) ? true : false;
  // }

  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/login']);
    }
  }
}
