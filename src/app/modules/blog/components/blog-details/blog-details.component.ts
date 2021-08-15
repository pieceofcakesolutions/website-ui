import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { BlogPost } from '../../models/BlogPost';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  @Input() blogPost: BlogPost;
  blogs: BlogService;

  constructor(private router: Router, private route: ActivatedRoute, _blogs: BlogService) {
    this.blogs = _blogs;
  }
  
  ngOnInit(): void {
    if(!this.blogPost){
      this.getBlogPost();
    }
  }
  
  getBlogPost(){
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.blogs.getPost(id).subscribe(post => this.blogPost = post); 
    return ;
  }
  
  onEdit(){
    const route = '/blog/edit/' + this.blogPost.id;
      this.router.navigate([route]);
    }
}
