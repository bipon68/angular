import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  // fetch user
  getUsers(): Observable<User[]>{
    // let myHeaders = new HttpHeaders({'myheader': 'headervalue'})
    let myHeaders = new HttpHeaders({'myheader': ['headervalue', 'headervalue2']})
    myHeaders = myHeaders.set('id', '1234');
    myHeaders = myHeaders.append('id', '0000')
    return this.http.get<User[]>(`${this.apiUrl}/users`, {headers: myHeaders})
  }

  // fetch user
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
