import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Response } from 'src/app/interface/response.interface';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  response: Response;
  mode: 'edit' | 'locked' = 'locked'
  buttonText: 'Save Changes' | 'Edit' = 'Edit'

  constructor(private activatedRoute:ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log('User ID: ', params.get('uuid')!);
      this.userService.getUser(params.get('uuid')!).subscribe(
        (response: any) => {
          console.log(response);
          this.response = response;
        }
      )
    })
  }

  changeMode(mode?: 'edit' | 'locked'):void{
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit': 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';
    if(mode === 'edit'){
      console.log('Updating using on the backend')
    }
  }

}
