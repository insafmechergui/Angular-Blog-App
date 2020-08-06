import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: "",
    password: ""
  }
  constructor(
    private _auth: AuthService,
    private router: Router
  ) {
    if (this._auth) {
      // this.router.navigate(['/'])
      // console.log(this._auth)
    }
  }

  ngOnInit(): void {
  }

  loginUser() {
    // console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          // this.router.navigate(['./'])
        },
        err => console.log(err)
      )

  }

}
