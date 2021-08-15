import Amplify, { Auth } from 'aws-amplify';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface ContactInfo {
  phone: string;
  instagram: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Piece of Cake Solutions';
  contactInfo: ContactInfo = {
    phone: '(214)-218-7385',
    instagram: 'https://www.instagram.com/pieceofcakesolutionsco/',
    email: 'getcakesolutions@gmail.com',
  };
  router: Router;
  isUserLoggedIn: boolean = false;
  userName: string = '';

  constructor(_router: Router) {
    this.router = _router;
  }
  
  getUrl(){
    return this.router.url
  }

  isHome(){
    return this.getUrl() === '/home'
  }

  ngOnInit(): void {
    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user);
        this.isUserLoggedIn = true;
        this.userName = user?.attributes?.name;
      })
      .catch(err => console.log(err))
  }

  login() {
    Auth.federatedSignIn();
  }

  logout() {
    this.isUserLoggedIn = false;
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}
