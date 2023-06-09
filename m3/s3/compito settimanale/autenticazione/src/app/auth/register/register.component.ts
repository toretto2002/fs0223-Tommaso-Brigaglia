import { Component } from '@angular/core';
import { ISignUpData } from 'src/app/interfaces/isign-up-data';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private AuthSvc: AuthService) {}
  data: ISignUpData = {
    email: '',
    password: '',
    name: '',
    surname: '',
  };
  register(form: any) {
    console.log(form);
    this.data = form.form.value;

    this.AuthSvc.signUp(this.data).subscribe((accessData) => {
      alert(accessData.user.name);
    });
  }
}
