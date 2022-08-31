import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;
  readonly moreParams = ['test1', 'test2']

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

  getUsers(): Observable<HttpEvent<User[]>>{
    return this.http.get<User[]>(`${this.apiUrl}/users`, {observe: 'events'})
  }

  // fetch user
  // getTextFile(): Observable<string>{
  //   return this.http.get(`assets/text.txt`, {responseType: 'text'})
  // }
  downloadFile(): Observable<HttpResponse<Blob>>{
    return this.http.get(`assets/text.txt`, {responseType: 'blob', observe: 'response'})
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`)
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

}
