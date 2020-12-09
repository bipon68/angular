import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular practice title';
  // courses = ['course1', 'course2', 'course3']
  courses;

  getTitle(){
    return this.title;
  }

  constructor(){
    
  }

}
