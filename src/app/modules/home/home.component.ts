import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { BlogPost } from '../blog/models/BlogPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = []
  blogs: BlogService;

  constructor(_blogs: BlogService) {
    this.blogs = _blogs;
    this.blogPosts = [];
  }
  
  ngOnInit(): void {
    this.getBlogPosts();
  }
  getBlogPosts(){
    return this.blogs.getPosts().subscribe(posts => {
      console.log(posts)
      this.blogPosts = posts.blogs
    });
  }

}
