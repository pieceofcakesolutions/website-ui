import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'auth-login',
  template: `
  <form [formGroup]="loginForm">
      <div>
          <label for="email">Email address</label>
          <input type="email" name="email" formControlName="email" required placeholder="Enter your email">
      </div>
      <div>
          <label for="password">Password</label>
          <input type="password" name="password" formControlName="password" required id="password"
              placeholder="Enter your password">
      </div>
      <div>
          <br />
          <button (click)="loginWithCognito()" class="btn btn-primary btn-block" type="button"> Log In </button>
      </div>
  </form>
  <p class="text-dark mb-0">Not a member? <a routerLink="../sign-up" class="text-primary ml-1">Sign Up now</a></p>
  `,
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  async loginWithCognito() {
    try {
      var user = await Auth.signIn(this.loginForm.controls['email'].value.toString(), this.loginForm.controls['password'].value.toString());
      var tokens = user.signInUserSession;
      if (tokens != null) {
        console.log('User authenticated');
        this.router.navigate(['']);
        alert('You are logged in successfully !');
      }
    } catch (error) {
      console.log(error);
      alert('User Authentication failed');
    }
  }
}
