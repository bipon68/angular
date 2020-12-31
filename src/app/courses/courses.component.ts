import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  isActive = true;

  courses;
  imageUrl = "http://lorempixel.com/400/200/";
  colSpan = 2;

  constructor(service: CoursesService) {
    // let service = new CoursesService;
    this.courses = service.geCourses();
   }

  ngOnInit() {

  }
  onSave($event){
    console.log('Button was clicked!', $event)
  }

}
