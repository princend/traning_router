import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { EditorComponent } from './editor/editor.component';
import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';
import { FormsModule } from "@angular/forms";
import { CarService } from '../car.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PostsRoutingModule,
    FormsModule
  ],
  declarations: [PostComponent, PostsComponent, EditorComponent],
  exports:[PostComponent, PostsComponent, EditorComponent,PostsRoutingModule],
  providers: [CarService],
})
export class PostsModule { }
