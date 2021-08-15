import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { BlogPost } from '../../models/BlogPost';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
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
    return this.blogs.getPosts().subscribe(posts => this.blogPosts = posts.blogs);
  }
  ngOnDestroy(): void {
    
  }
}
