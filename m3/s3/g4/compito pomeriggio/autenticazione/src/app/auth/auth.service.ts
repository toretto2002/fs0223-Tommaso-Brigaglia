import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IAuthData } from '../interfaces/iauth-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ISignUpData } from '../interfaces/isign-up-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl: string = ' http://localhost:3000';
  registerUrl: string = this.apiUrl + '/register';
  loginUrl: string = this.apiUrl + '/login';
  userUrl: string = this.apiUrl + '/users';

  private authSubject = new BehaviorSubject<null | IAuthData>(null);
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((user) => !!user));

  autoLogTimer: any;

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  login(data: { email: string; password: string }) {
    return this.http.post<IAuthData>(this.loginUrl, data).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('user', JSON.stringify(data));

        const expDate = this.jwtHelper.getTokenExpirationDate(
          data.accessToken
        ) as Date;

        this.autoLogout(expDate);
      })
    );
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  autoLogout(expDate: Date) {
    const expMs = expDate.getTime() - new Date().getTime();
    this.autoLogTimer = setTimeout(() => {
      this.logout();
    }, expMs);
  }

  signUp(data: ISignUpData) {
    return this.http.post<IAuthData>(this.registerUrl, data);
  }

  restoreUser() {
    const userJson = localStorage.getItem('user');

    if (!userJson) {
      return;
    }

    const user: IAuthData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(user.accessToken)) {
      return;
    }

    this.authSubject.next(user);
  }
}
