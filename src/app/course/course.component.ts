import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  title: string;
  courses: string[];

  constructor(courses: CoursesService) {
    this.title = 'List of Courses';
    this.courses = courses.getCourses();
  }

  ngOnInit(): void {}
}
