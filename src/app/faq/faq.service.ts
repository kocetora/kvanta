import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  private url = 'https://dummyjson.com/';

  constructor(private httpClient: HttpClient) {}

  getFaqes() {
    return this.httpClient.get(`${this.url}posts`);
  }
}
