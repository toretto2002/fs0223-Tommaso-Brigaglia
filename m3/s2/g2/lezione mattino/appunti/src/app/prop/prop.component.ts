import { Component } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss'],
})
export class PropComponent {
  visibile: boolean = true;

  toggle() {
    this.visibile = !this.visibile;
  }
}
