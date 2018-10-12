import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { EditorComponent } from './editor/editor.component';
import { RouterModule, Route, Routes } from '@angular/router';


const routes:Routes=[  {
  path: '',
  redirectTo:'posts',
  pathMatch:'full'
},
{
  path: 'post/:id',
  component: PostComponent
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'create',
  component: EditorComponent
}]

@NgModule({
  imports: [
    
    RouterModule.forChild(routes),
    
  ],
  exports:[RouterModule]
})
export class PostsRoutingModule { }
