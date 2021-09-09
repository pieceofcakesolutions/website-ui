import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-blog',
  template: `<router-outlet></router-outlet>`,
  styles: [
  ]
})
export class BlogComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
}
