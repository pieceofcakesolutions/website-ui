import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piece of Cake Solutions';
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
