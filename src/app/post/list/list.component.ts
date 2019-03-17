import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';
import { Post } from '../model';
import { PostService } from '../service';

@Component({
  selector: 'app-post-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy{
  // posts = [
  //   {title: 'first', content: 'first post'},
  //   {title: 'Second', content: 'Second post'}
  // ];
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostService){}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostsUpdatedListner().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
