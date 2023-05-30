import { Component } from '@angular/core';
import { Posts } from 'src/app/Modules/posts';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss'],
})
export class PostAttiviComponent {
  postsToFilter: Posts[] = [];
  postsAttivi: Posts[] = [];

  constructor(private postSvc: PostService) {
    postSvc.getAllPosts().then((posts) => {
      this.postsToFilter = posts;

      this.postsAttivi = this.postsToFilter.filter((post) => post.active);

      return this.postsAttivi;
    });
  }
}
