import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

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

}
