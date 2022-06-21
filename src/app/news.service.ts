import { Injectable } from '@angular/core';
import Butter, { ButterStatic } from 'buttercms';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  butterService: ButterStatic;
  constructor() {
    this.initializeButterCMS();
  }

  initializeButterCMS() {
    this.butterService = Butter('4f4a96586b9efdccd90c5b471fe3570fad97d655');
  }

  getPosts$() {
    return from(
      this.butterService.post.list().then((posts) => {
        console.log(posts.data.data);
        return posts.data.data;
      })
    );
  }
}
