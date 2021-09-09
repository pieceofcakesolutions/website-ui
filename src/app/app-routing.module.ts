import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { UnauthGuard } from './auth/unauth.guard';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ConfirmCodeComponent } from './auth/confirm-code/confirm-code.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { BlogListComponent } from './blog/components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './blog/components/blog-details/blog-details.component';
import { BlogEditComponent } from './blog/components/blog-edit/blog-edit.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { BlogComponent } from './blog/components/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'auth', component: AuthComponent, children: [
      {
        path: 'signin',
        component: SignInComponent,
        canActivate: [UnauthGuard]
      },
      {
        path: 'signup',
        component: SignUpComponent,
        canActivate: [UnauthGuard]
      },
      {
        path: 'confirm',
        component: ConfirmCodeComponent,
        canActivate: [UnauthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        path: '',
        component: BlogListComponent,
      },
      {
        path: 'view/:id',
        component: BlogDetailsComponent,
      },
      {
        path: 'add',
        component: BlogEditComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit/:id',
        component: BlogEditComponent,
        canActivate: [AuthGuard]
      },
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: CompanyServicesComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
