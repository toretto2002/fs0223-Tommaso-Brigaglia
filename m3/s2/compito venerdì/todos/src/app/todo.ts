import { ITodo } from './itodo';

export class Todo implements ITodo {
  id!: number;
  title: string;
  compleded: boolean;

  constructor(title: string, complemented: boolean) {
    this.title = title;
    this.compleded = complemented;
  }
}
