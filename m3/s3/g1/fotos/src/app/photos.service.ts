import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(this.apiUrl);
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
