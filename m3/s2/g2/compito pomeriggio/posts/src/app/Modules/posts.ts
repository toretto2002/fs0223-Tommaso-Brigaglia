export class Posts {
  active: boolean;
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(
    active: boolean,
    userId: number,
    id: number,
    title: string,
    body: string
  ) {
    this.active = active;
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
