import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers(15).subscribe(
        (results: any) => {
          console.log(results)
        }
    );
  }

}
