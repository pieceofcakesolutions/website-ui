import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogService } from './blog.service';


@NgModule({
  declarations: [
    BlogComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
  ],
  providers: [
    BlogService,
  ]
})
export class BlogModule { }
