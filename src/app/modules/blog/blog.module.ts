import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './pages/blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContentBlogComponent } from './components/content-blog/content-blog.component';


const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
];

@NgModule({
  declarations: [
    BlogComponent,
    ContentBlogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BlogModule { }
