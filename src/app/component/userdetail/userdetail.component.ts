import { Coordinate } from './../../interface/coordinate.interface';
import { UserService } from './../../service/user.service';
import * as LeafLet from 'leaflet';
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
    // this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    //   console.log('User ID: ', params.get('uuid')!);
    //   this.userService.getUser(params.get('uuid')!).subscribe(
    //     (response: any) => {
    //       console.log(response);
    //       this.response = response;
    //     }
    //   )
    // })
    //this.loadMap(this.response.coordinate)
  }

  changeMode(mode?: 'edit' | 'locked'):void{
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit': 'locked';
    this.buttonText = this.buttonText === 'Edit' ? 'Save Changes' : 'Edit';
    if(mode === 'edit'){
      console.log('Updating using on the backend')
    }
  }

  private loadMap(coordinate: Coordinate): void{
    const map = LeafLet.map('map', {
      center: [coordinate.latitude, coordinate.longitude],
      zoom: 8
    })
    const mainLayer = LeafLet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      maxZoom: 30,
      crossOrigin: true,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    mainLayer.addTo(map);
  }

}
