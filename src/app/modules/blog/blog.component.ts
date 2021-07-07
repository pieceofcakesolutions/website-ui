import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { BlogPost } from './models/BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogPosts: BlogPost[] = []
  blogs: BlogService;

  constructor(_blogs: BlogService) {
    this.blogs = _blogs;
    this.blogPosts = [];
  }
  
  ngOnInit(): void {
    this.blogPosts = this.getBlogPosts();
  }
  getBlogPosts(){
    return this.blogs.getPosts();
  }

}
