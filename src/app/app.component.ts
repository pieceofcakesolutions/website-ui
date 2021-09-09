import Amplify, { Auth } from 'aws-amplify';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoUserInterface, onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components';
import { AuthService } from './auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Storage from "@aws-amplify/storage";
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

export class AppComponent implements OnInit {
  title: string = 'Piece of Cake Solutions';
  contactInfo: ContactInfo = {
    phone: '(214)-218-7385',
    instagram: 'https://www.instagram.com/pieceofcakesolutionsco/',
    email: 'getcakesolutions@gmail.com',
  };
  avatar: string;
  user: CognitoUserInterface | undefined;
  authState: string;
  constructor(
    private router: Router,
    private ref: ChangeDetectorRef,
    public auth: AuthService,
    private toast: MatSnackBar
  ) {
    auth.authState.subscribe((event: string) => {
      if (event === AuthService.SIGN_IN) this.checkSession();
      if (event === AuthService.SIGN_OUT) this.avatar = undefined;
    });
  }
  
  ngOnInit(): void {
    this.checkSession();
  }

  ngOnDestroy(){
    
  }

  async checkSession() {
    try {
      const userInfo = await Auth.currentUserInfo();
      if (userInfo) {
        const avatar = userInfo.attributes.profile;
        if(avatar){
          const url = (await Storage.vault.get(avatar)) as string;
          this.avatar = url;  
        }
        this.user = userInfo
        this.auth.loggedIn = true
      }
    } catch (error) {
      console.log("no session: ", error);
    }
  }
  
  isLoggedIn(){
    if(this.user){return true}    
  }

  login() {
    this.router.navigate(['auth/signin']);
  }

  async logout() {
    this.user = undefined
    await this.auth.signOut()
  }

  getUrl(){
    return this.router.url
  }

  isHome(){
    return this.getUrl() === '/home'
  }
}
