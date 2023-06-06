export class Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;

  constructor(
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
  ) {
    this.albumId = albumId;
    this.id = id;
    this.thumbnailUrl = thumbnailUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.title = title;
    this.url = url;
  }
}
