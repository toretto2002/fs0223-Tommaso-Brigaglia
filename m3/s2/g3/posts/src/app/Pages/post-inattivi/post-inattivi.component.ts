import { Component } from '@angular/core';
import { Posts } from 'src/app/Modules/posts';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss'],
})
export class PostInattiviComponent {
  postsToFilter: Posts[] = [];
  postsInattivi: Posts[] = [];

  constructor(private postSvc: PostService) {
    postSvc.getAllPosts().then((posts) => {
      this.postsToFilter = posts;

      this.postsInattivi = this.postsToFilter.filter((post) => !post.active);

      return this.postsInattivi;
    });
  }
  toggle(post: any): any {
    this.postsInattivi = this.postsToFilter.filter((post) => !post.active);

    return this.postsInattivi;
  }
}
