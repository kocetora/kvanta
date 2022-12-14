import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less']
})
export class CoursesComponent {
  courses: any;

  constructor(private coursesService: CoursesService){}

  ngOnInit(){
    this.coursesService.getCourses().subscribe((courses: any) => this.courses = courses.products)
  }
}
