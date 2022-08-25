import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }

  // fetch user
  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`)
  }

  createUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/users`, user)
  }

}
