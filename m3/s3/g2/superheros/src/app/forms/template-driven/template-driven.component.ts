import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent {
  @ViewChild('f', { static: true }) form!: NgForm;

  submit(form: NgForm) {
    console.log(form);

    this.form.reset();
  }
}
