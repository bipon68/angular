import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl: string = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  // fetch user
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`)
  }

  // fetch user
  getUser(): Observable<User>{
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users`)
  }

}
