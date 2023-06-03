import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodosComponent } from 'src/app/pages/todos/todos.component';
import { Todo } from 'src/app/todo';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  todo: Todo = new Todo('', false);

  constructor(private todoSvc: TodosService) {}
  @ViewChild('textArea') textArea: any;

  add() {
    this.todoSvc.addTodo(this.todo).then((res: any) => console.log(res));
    this.textArea.nativeElement.value = '';
  }
}
