import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticles } from '../interfaces/iarticles';

@Injectable({
  providedIn: 'root',
})
export class BackofficeService {
  apiUrl: string = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) {}

  upload(data: IArticles) {
    return this.http.post(this.apiUrl, data);
  }
}
