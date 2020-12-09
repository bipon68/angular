import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses;

  constructor(service: CoursesService) {
    // let service = new CoursesService;
    this.courses = service.geCourses();
   }

  ngOnInit() {
  }

}
