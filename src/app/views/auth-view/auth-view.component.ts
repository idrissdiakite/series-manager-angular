import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  authForm: FormGroup;
  errorMsg: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

   /**
   * Connect user
   */

  onClickSignIn(form: NgForm): void {

    const login = form.value.login;
    const password = form.value.password;

    this.authService
    .signIn(login, password)
    .then(() => {
      this.router.navigate(['series']);
    })
    .catch((err) => {
      this.errorMsg= err;
    });
  }


}
