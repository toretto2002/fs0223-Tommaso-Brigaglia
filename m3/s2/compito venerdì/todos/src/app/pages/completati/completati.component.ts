import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss'],
})
export class CompletatiComponent {
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
        if (item.compleded) {
          this.filteredTodos.push(item);
        }
      }
      console.log(this.todos);
    });
  }
}
