import { Injectable } from '@angular/core';
import { Constants } from '../models/constants';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Getting the API URL from the Constants model.
  apiUrl = Constants.API_LOGIN_SERVICE_URL;

  // Defining the Request-options.
  options = {
    headers: new HttpHeaders({
      Authorization: `bearer ${this.cookieService.get('SessionToken')}`,
    }),
    withCredentials: true,
  };

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  login(username: string, password: string): Observable<string> {
    const user = { username, password };
    return this.http.post<string>(`${this.apiUrl}/login`, user, {
      withCredentials: true,
    });
  }

  forgotPassword(): void {}
  resetPassword(): void {}
  register(): void {}
  logout(): void {
    this.cookieService.removeAll();
    this.router.navigate(['login']);
  }
}
