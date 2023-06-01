export class Posts {
  active: boolean;
  userId: number;
  id: number;
  type: string;
  title: string;
  body: string;

  constructor(
    active: boolean,
    userId: number,
    id: number,
    type: string,
    title: string,
    body: string
  ) {
    this.active = active;
    this.userId = userId;
    this.id = id;
    this.type = type;
    this.title = title;
    this.body = body;
  }
}
