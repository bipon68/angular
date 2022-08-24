import { UserService } from './service/user.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
// import { FavoriteComponent } from '../app/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
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

  constructor(private userService: UserService){
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

    // observable.subscribe({
    //   next(response: HttpResponse){
    //     console.log('got Response: ', response)
    //   },
    //   error(error: any){
    //     console.error('something wrong occured: ', error)
    //   },
    //   complete(){
    //     console.log('done')
    //   }
    // })
    
  }

ngOnInit(): void {
  this.onGetUsers();
  this.onGetUser()
}



  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(),
      ()=> console.log('Done everything users')
    )
  }
  onGetUser(): void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(),
      ()=> console.log('Done everything user')
    )
  }



}
