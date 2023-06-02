import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  apiUrl: string = 'http://localhost:3000/todos';

  allTodos: Todo[] = [];

  constructor() {}

  getTodos(): any {
    return fetch(this.apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('non sono riuscito a caricare le pagine');
        }
      })
      .catch((error) => console.log(error));
  }

  addTodo(todo: Todo): any {
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    }).then((response) => response.json());
  }
}
