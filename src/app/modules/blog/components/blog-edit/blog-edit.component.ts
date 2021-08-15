import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BlogPost } from '../../models/BlogPost';
import { FormBuilder, FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { BlogService } from '../../blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit, OnDestroy {
  @Input() newPost: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  formData: BlogPost;
  blogPost: BlogPost;
  private addPostSub: any;
  private getPostSub: any;
  private delPostSub: any;
  private activeRouteSub: any;
  private id: string;

newBlogPostForm = new FormGroup({
  title: new FormControl('',Validators.required),
  subtitle: new FormControl(),
  content: new FormControl(),
  description: new FormControl(),
});

ngOnInit() {
  this.activeRouteSub = this.route.params.subscribe(params => {
    this.id = params['id'];
  });
  if(this.id){
    this.getPostSub = this.blogService.getPost(this.id).subscribe(post => {
      this.blogPost = post;
    },
      () => { },
      () => {
        this.newBlogPostForm = this.formBuilder.group({
          title: this.blogPost.title,
          subtitle: this.blogPost.subtitle,
          content: this.blogPost.content,
          description: this.blogPost.description,
        });
      });
  }
}

getContentControl(){
  return this.newBlogPostForm.controls['content'] as FormControl
}

onSubmit() {
  const blogData: BlogPost = this.newBlogPostForm.value;
  
  this.blogPost = {
    ...this.blogPost,
    ...blogData,
  }

  if(!this.blogPost.id){
    this.addPostSub = this.blogService.addPost(this.blogPost).subscribe(
      val => {
        console.log('POST call successful value returned in body', val);
        this.blogPost = val;
      },
      response => {
        console.log('POST call in error', response);
      },
      () => {
        console.log('The POST observable is now completed.');
        const route = '/blog/view/' + this.blogPost.id;
        this.router.navigate([route]);
      });
  } else {
    this.addPostSub = this.blogService.updatePost(this.blogPost).subscribe(
      val => {
        console.log('PUT call successful value returned in body', val);
      },
      response => {
        console.log('PUT call in error', response);
      },
      () => {
        console.log('The PUT observable is now completed.');
        const route = '/blog/view/' + this.id;
        this.getPostSub.unsubscribe();
        this.router.navigate([route]);
      });
  }
}

onDelete() {
  this.delPostSub = this.blogService.deletePost(this.blogPost).subscribe(
    () => {},
    () => {},
    () => {
      console.log('The Delete observable is now completed.');
      this.router.navigate(['/blog']);
    }
  );
}

ngOnDestroy() {
  if (this.addPostSub) {
    this.addPostSub.unsubscribe();
  }
  if (this.delPostSub) {
    this.delPostSub.unsubscribe();
  }
  this.activeRouteSub.unsubscribe();
}

}
