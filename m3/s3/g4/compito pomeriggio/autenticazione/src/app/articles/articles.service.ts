import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticles } from '../interfaces/iarticles';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  apiUrl: string = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<IArticles[]>(this.apiUrl);
  }
}
