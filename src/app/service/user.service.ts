import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { map, retry, tap } from 'rxjs/operators';
//https://robohash.org/

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  readonly moreParams = ['test1', 'test2'];
  readonly defaultImage = 'https://robohash.org/'

  constructor(private http: HttpClient) { }

  // fetch user
  // getUsers(): Observable<User[]>{
  //   // let myHeaders = new HttpHeaders({'myheader': 'headervalue'})
  //   // let myHeaders = new HttpHeaders({'myheader': ['headervalue', 'headervalue2']})
  //   // myHeaders = myHeaders.set('id', '1234');
  //   // myHeaders = myHeaders.append('id', '0000')

  //   // let myParams = new HttpParams().set('page', '5').set('sort', 'true');
  //   // myParams = myParams.append('name', 'junior')

    
  //   const theParams = {['testList']: this.moreParams}
  //   // let myParams = new HttpParams({fromObject: theParams})
  //   // let myParams = new HttpParams({fromObject: {['testList']: this.moreParams}})
  //   let myParams = new HttpParams({fromString: 'name=Bipon&id=77'})
  //   return this.http.get<User[]>(`${this.apiUrl}/users`, {params: myParams})
  // }

  // getUsers(): Observable<HttpEvent<User[]>>{
  //   return this.http.get<User[]>(`${this.apiUrl}/users`, {observe: 'events'})
  // }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users0000`)
      .pipe(
        retry(3),
        // tap(users => console.log(users)),
        // map(users => users.map(user => ({
        //   // ...user,
        //   name: user.name.toUpperCase(),
        //   username: user.username,
        //   image: `${this.defaultImage}${user.username.toLowerCase()}`,
        //   email: user.email,
        //   website: user.website,
        //   phone: user.phone,
        //   isAdmin: user.id === 10? 'Admin' : 'User',
        //   searchKey: [user.name, user.username]
        // })))
      )
  }

  // fetch user
  // getTextFile(): Observable<string>{
  //   return this.http.get(`assets/text.txt`, {responseType: 'text'})
  // }
  downloadFile(): Observable<HttpResponse<Blob>>{
    return this.http.get(`assets/text.txt`, {responseType: 'blob', observe: 'response'})
  }

  // getUser(): Observable<User>{
  //   return this.http.get<User>(`${this.apiUrl}/users/1`)
  // }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`).pipe(
      map(user => {
        return {...user, isAdmin: true, searchKey: [user.name, user.username]}
      })
    )
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  patchUser(user: User): Observable<User>{
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`, user)
  }

  deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/users/${id}`)
  }

  // getUsers(): Observable<User[]>{
  //   return this.http.get<User[]>(`${this.apiUrl}/users`)
  //     .pipe(
  //       // tap(users => console.log(users)),
  //       map(users => users.map(user => ({
  //         // ...user,
  //         name: user.name.toUpperCase(),
  //         username: user.username,
  //         image: `${this.defaultImage}${user.username.toLowerCase()}`,
  //         email: user.email,
  //         website: user.website,
  //         phone: user.phone,
  //         isAdmin: user.id === 10? 'Admin' : 'User',
  //         searchKey: [user.name, user.username]
  //       })))
  //     )
  // }

}
