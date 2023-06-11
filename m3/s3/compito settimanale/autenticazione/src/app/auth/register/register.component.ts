import { Component, ViewChild } from '@angular/core';
import { ISignUpData } from 'src/app/interfaces/isign-up-data';
import { AuthService } from '../auth.service';
import { IAuthData } from 'src/app/interfaces/iauth-data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  currentUser!: IAuthData;
  isLoggedIn: boolean = false;

  @ViewChild('f', { static: true }) form!: NgForm;

  constructor(private AuthSvc: AuthService) {}
  data: ISignUpData = {
    email: '',
    password: '',
    name: '',
    surname: '',
  };

  ngOnInit() {
    this.fillFields();
  }

  register(form: any) {
    console.log(form);
    this.data = form.form.value;

    this.AuthSvc.signUp(this.data).subscribe((accessData) => {
      alert(accessData.user.name);
    });
  }

  fillFields() {
    let jsonUser: string | null = localStorage.getItem('user');

    if (jsonUser) {
      this.currentUser = JSON.parse(<string>jsonUser);
      this.isLoggedIn = true;
      console.log(this.currentUser);
      console.log(this.form);
      console.log(this.currentUser.user.email);

      let datiDaInserire = {
        email: this.currentUser.user.email,
        name: this.currentUser.user.name,
        surname: this.currentUser.user.surname,
      };

      console.log(datiDaInserire);

      this.form.form.patchValue(datiDaInserire);

      console.log();
    } else {
      console.log('nessun utente loggato');
    }
  }
}
