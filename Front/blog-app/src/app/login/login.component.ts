import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: [""],
    password: [""]
  }
  currentUser: Object = {}
  constructor(
    private _auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          localStorage.setItem('access_token', res.token)
          this.currentUser = res.token
          this.router.navigate(['./']);
        }
      )
  }

}
