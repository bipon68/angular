import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  course = {
    title: "The Angular Course",
    rating: 4.9723,
    students: 30455,
    price: 160.45,
    releaseDate: new Date(2016, 3, 1)
  }

  email = "tomjerry@gmail.com"

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
    $event.stopPropagation();
    console.log('Button was clicked!', $event)
  }
  onDivClicked(){
    console.log('Div was clicked!')
  }
  // onKeyUp($event){
  //   if($event.keyCode === 13){
  //       console.log('Enter was pressed.')
  //   }
  // }

  // template variables
  // onKeyUp($event){
  //       console.log('Input value data: ', $event.target.value)
  // }

  onKeyUp(){
    console.log('Email: ', this.email)
  }

}
