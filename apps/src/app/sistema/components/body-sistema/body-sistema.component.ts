import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-body-sistema',
  templateUrl: './body-sistema.component.html',
  styleUrls: ['./body-sistema.component.scss']
})
export class BodySistemaComponent implements OnInit {

  user : any = []

  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this._auth.user().subscribe((resp:any) => {
      this.user = resp
    })
  }

  closeSesion(){
    this._auth.salir().subscribe((reps:any) => {      
      localStorage.clear()
      location.href = '/'
    })
  }
}
