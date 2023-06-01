import { Injectable } from '@angular/core';
import { Posts } from './Modules/posts';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl: string = '../assets/db.json';
  constructor() {}

  getAllPosts(): Promise<Posts[]> {
    return fetch(this.apiUrl).then((response) => response.json());
  }

  modifyPost(post: Posts): void {
    fetch(this.apiUrl, {
      method: 'POST',
    }).then((response) => response.json);
  }
}
