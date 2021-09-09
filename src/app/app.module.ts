import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { LoginComponent } from './login.component';
import { AuthComponent } from './auth/auth.component';
import { LoaderComponent } from './loader/loader.component';
import { CountryCodeSelectComponent } from './auth/country-code-select/country-code-select.component';
import { FilterPipe } from './auth/country-code-select/filter.pipe';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ConfirmCodeComponent } from './auth/confirm-code/confirm-code.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { AvatarComponent } from './auth/profile/avatar/avatar.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth/auth.service';
import { BlogDetailsComponent } from './blog/components/blog-details/blog-details.component';
import { BlogListComponent } from './blog/components/blog-list/blog-list.component';
import { BlogEditComponent } from './blog/components/blog-edit/blog-edit.component';
import { RichTextEditorComponent } from './rich-text-editor/rich-text-editor.component';
import { HomeComponent } from './home/home.component';
import { CompanyServicesComponent } from './company-services/company-services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/components/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    AuthComponent,
    LoaderComponent,
    CountryCodeSelectComponent,
    FilterPipe,
    SignInComponent,
    SignUpComponent,
    ConfirmCodeComponent,
    ProfileComponent,
    AvatarComponent,
    BlogDetailsComponent,
    BlogListComponent,
    BlogEditComponent,
    RichTextEditorComponent,
    HomeComponent,
    CompanyServicesComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    AmplifyUIAngularModule,
    QuillModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoaderComponent,
    CountryCodeSelectComponent
  ]
})
export class AppModule { }
