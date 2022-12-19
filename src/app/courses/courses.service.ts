import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { API_URL } from '../shared/configs/injection-tokens';


@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  headers: HttpHeaders;
  constructor(
    @Inject(API_URL) private _apiUrl: string,
    private _httpClient: HttpClient
  ) {
    this.headers = new HttpHeaders();
  }

  getCourses() {
    return this._httpClient.get(`${this._apiUrl}subjects`, {
      headers: this.headers,
    });
  }
}
