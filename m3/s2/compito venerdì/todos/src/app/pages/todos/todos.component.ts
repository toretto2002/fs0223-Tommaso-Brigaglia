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
  filteredTodos: Todo[] = [];

  constructor(private todoSvc: TodosService) {}

  ngOnInit() {
    this.fillFilteredList();
  }

  fillFilteredList() {
    this.todoSvc.getTodos().then((response: any) => {
      this.todos = response;
      for (let item of this.todos) {
        if (!item.compleded) {
          this.filteredTodos.push(item);
        }
      }
      console.log(this.todos);
    });
  }

  check(todo: Todo) {
    todo.compleded = true;
    this.todoSvc.checkTodo(todo);
    console.log(todo);
  }
}
