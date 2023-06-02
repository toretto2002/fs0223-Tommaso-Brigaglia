import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Todo[] = [];

  constructor(private todoSvc: TodosService) {}

  ngOnInit() {
    this.fillList();
  }

  fillList() {
    this.todoSvc.getTodos().then((response: any) => {
      this.todos = response;
      console.log(this.todos);
    });
  }
}
