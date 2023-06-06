import { Component } from '@angular/core';
import { PhotosService } from './photos.service';
import { Photo } from './photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fotos';

  photos: any = [];

  constructor(private PhotosSvc: PhotosService) {}

  ngOnInit(): void {
    this.PhotosSvc.get().subscribe((res) => {
      this.photos = res;
    });
  }
}
