import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule) },
  { path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
