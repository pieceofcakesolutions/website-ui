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
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Piece of Cake Solutions';
  contactInfo: ContactInfo = {
    phone: '(214)-218-7385',
    instagram: 'https://www.instagram.com/pieceofcakesolutionsco/',
    email: 'getcakesolutions@gmail.com',
  }
  router: Router
  constructor(_router: Router) {
    this.router = _router;
  }
  getUrl(){
    return this.router.url
  }

  isHome(){
    return this.getUrl() === '/home'
  }
}
