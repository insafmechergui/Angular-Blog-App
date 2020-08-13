import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { DisplayBlogComponent } from './display-blog/display-blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'addBlog',
    component: AddBlogComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'displayBlog',
    component: DisplayBlogComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
