import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  user : any = []
  isLogin : boolean = false;

  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this._auth.user().subscribe((resp:any) => {
      this.user = resp
      this.isLogin = true;  
    },(error:any) => {
      this.isLogin = false;  
    })
  }

  closeSesion(){
    this._auth.salir().subscribe((reps:any) => {      
      localStorage.clear()
      location.href = '/'
    })
  }

}
