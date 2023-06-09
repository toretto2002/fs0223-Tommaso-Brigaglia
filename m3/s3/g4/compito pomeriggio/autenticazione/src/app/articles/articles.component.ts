import { Component } from '@angular/core';
import { IArticles } from '../interfaces/iarticles';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent {
  article: IArticles[] = [];

  constructor(private articleSvc: ArticlesService) {}

  ngOnInit() {
    this.fill();
  }

  fill() {
    this.articleSvc.get().subscribe((res) => {
      this.article = res;
      console.log(this.article);
    });
  }
}
