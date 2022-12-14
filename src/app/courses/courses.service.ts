import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private url = 'https://dummyjson.com/';
    
  constructor(private httpClient: HttpClient) { }
   
  getCourses(){
    return this.httpClient.get(`${this.url}products`);
  }
}
