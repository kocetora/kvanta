import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuth = false;
  private url = 'https://dummyjson.com/';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage['jwt'],
    }),
  };

  login(user: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}login`, user);
  }

  // signUp(user: User): Observable<{}> {
  //   const url = `${ApiRoutes.SIGNUP}`;
  //   return this.http.post(`${environment.API_URL}${url}`, user);
  // }

  // logout(): Observable<{}> {
  //   const url = `${ApiRoutes.LOGOUT}`;
  //   return this.http.get<{}>(`${environment.API_URL}${url}`, this.httpOptions);
  // }

  // isAuthentificated() {
  //   if (localStorage.jwt) {
  //     this.isAuth = true;
  //     return this.isAuth;
  //   } else {
  //     this.isAuth = false;
  //     return this.isAuth;
  //   }
  // }
}
