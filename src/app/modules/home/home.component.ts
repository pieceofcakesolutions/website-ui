import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { BlogPost } from '../blog/models/BlogPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: BlogService;
  blogPosts: BlogPost[];

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
