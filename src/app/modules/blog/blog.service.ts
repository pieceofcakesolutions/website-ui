import { Injectable } from '@angular/core';
import { BlogPost } from './models/BlogPost';
import { BLOG_POSTS } from './models/BLOG_POSTS';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogPosts: BlogPost[];

  constructor() {
    this.blogPosts = BLOG_POSTS;
  }

  
  getPosts(){
    return this.blogPosts
  }
  addPost(post: BlogPost){
    this.blogPosts.push(post);
  }
}
