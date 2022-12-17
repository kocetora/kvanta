import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.less'],
})
export class CoursesComponent implements OnInit {
  courses: any;
  loading = true;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService
      .getCourses()
      .subscribe((courses: any) => {
        this.courses = courses;
        this.loading = false;
        // setTimeout(()=>this.loading = false, 3000)
        
      });
      
  }
}
