import { Component } from '@angular/core';
import { Post } from '../model';
import { NgForm } from '@angular/forms';
import { PostService } from '../service';

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent{
  newTitle = '';
  newContent = '';

  constructor(public postsService: PostService){}

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
