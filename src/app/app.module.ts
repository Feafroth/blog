import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule   } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPreviewComponent } from './blog-preview/blog-preview.component';
import { BlogComponent } from './blog/blog.component';

const appRoutes: Routes = [
    {path: "", component: BlogListComponent},
    {path: "login", component: LoginComponent},
    {path: "blog/:key", component: BlogComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogListComponent,
    BlogPreviewComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {bindToComponentInputs: true}),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,  // for Authentication
    AngularFirestoreModule,  // for Firestore
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
