import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ILogin } from 'src/app/interfaces/ilogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authSvc: AuthService) {}

  data: ILogin = {
    email: '',
    password: '',
  };

  login(f: any) {
    console.log(f);

    this.data = f.form.value;

    this.authSvc.login(this.data).subscribe((accessData) => {
      alert(`sei loggato come ${accessData.user.name}`);
    });
  }
}
