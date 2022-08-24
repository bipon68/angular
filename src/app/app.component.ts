import { Observable } from 'rxjs';
import { Component } from '@angular/core';
// import { FavoriteComponent } from '../app/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'User Catalog';
  // courses = ['course1', 'course2', 'course3']
  // courses;
  // post = {
  //   title: "Post title",
  //   isFavorite: true
  // }

  // getTitle(){
  //   return this.title;
  // }

  constructor(){
    type HttpResponse = {code: number, data: string};

    const observable = new Observable<HttpResponse>(subscriber => {
      console.log('Inside subscriber...');
      subscriber.next({code: 200, data: 'this is data 1...'})
      subscriber.next({code: 200, data: 'this is data 2...'})
      subscriber.next({code: 200, data: 'this is data 3...'})
      // subscriber.error({code: 500, msg: 'An error occured...'})
      setTimeout(() => {
        subscriber.next({code: 200, data: 'this is data more data...'});
        subscriber.complete();
      }, 3*1000);
      console.log('subscriber is done emitting...')
    })

    observable.subscribe({
      next(response: HttpResponse){
        console.log('got Response: ', response)
      },
      error(error: any){
        console.error('something wrong occured: ', error)
      },
      complete(){
        console.log('done')
      }
    })
    
  }

}
