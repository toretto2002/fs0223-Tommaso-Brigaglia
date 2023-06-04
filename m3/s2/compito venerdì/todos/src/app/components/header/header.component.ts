import { visitAll } from '@angular/compiler';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  todosPage: boolean = true;
  @ViewChild('todosLink') todosLink: any;
  @ViewChild('completedLink') completedLink: any;

  toCompleted() {
    if (this.todosPage) {
      this.todosLink.nativeElement.classList.remove('current-page');
      this.completedLink.nativeElement.classList.add('current-page');
      this.todosPage = false;
    } else {
      this.todosLink.nativeElement.classList.add('current-page');
      this.completedLink.nativeElement.classList.remove('current-page');
      this.todosPage = true;
    }
  }
}
