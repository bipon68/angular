import { Component } from '@angular/core';
import { FavoriteComponent } from '../app/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular practice title';
  // courses = ['course1', 'course2', 'course3']
  courses;
  post = {
    title: "Post title",
    isFavorite: true
  }

  getTitle(){
    return this.title;
  }

  constructor(){
    
  }

}
