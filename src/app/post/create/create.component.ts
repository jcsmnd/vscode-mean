import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent{
  newValue = '';
  newPost = '';

  onAddPost(input: HTMLTextAreaElement){
    console.dir(input);
    alert('clicked');
    //this.newPost = input.value;
    this.newPost = this.newValue;
  }
}
