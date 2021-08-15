import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RichTextEditorModule } from '../rich-text-editor/rich-text-editor.module';
import { MatInputModule } from '@angular/material/input';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogListComponent,
    BlogEditComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    RichTextEditorModule,
    QuillModule
  ],
  providers: [
    BlogService,
  ]
})
export class BlogModule { 
}
