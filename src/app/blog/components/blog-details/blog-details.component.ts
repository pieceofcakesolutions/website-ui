import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../../blog.service';
import { BlogPost } from '../../models/BlogPost';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'aws-amplify';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthState, CognitoUserInterface, onAuthUIStateChange } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  @Input() blogPost: BlogPost;
  subs: Subscription[] = [];
  authState: AuthState;
  
  user: CognitoUserInterface | undefined;

  constructor(
    private ref: ChangeDetectorRef,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private blogs: BlogService
  ) {}
  
  ngOnInit() {
    onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.ref.detectChanges();
    })
    if(!this.blogPost){
      this.getBlogPost();
    }
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
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

  userCanEditPost(){    }

}
