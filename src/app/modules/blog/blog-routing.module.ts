import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: 'add', component: BlogEditComponent},
  { path: 'view/:id', component: BlogDetailsComponent, },
  { path: 'edit/:id', component: BlogEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
