import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { AuthState } from 'aws-amplify-angular/dist/src/providers';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { BlogService } from '../../blog.service';
import { BlogPost } from '../../models/BlogPost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = []
  authState: AuthState;
  subs: Subscription[]; 
  constructor(private blogs: BlogService, private auth: AuthService) {
    this.blogPosts = [];
  }
  
  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(){
    this.subs.push(this.blogs.getPosts().subscribe(posts => this.blogPosts = posts.blogs));
  }

  

  ngOnDestroy(): void {
    
  }

  isLoggedIn() {

  }
}
