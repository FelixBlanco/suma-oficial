import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  servicios : any = []

  constructor(
    private _servicios : ServiciosService
  ) { }

  ngOnInit(): void {
    this.getServicios()
  }

  getServicios(){
    this._servicios.publicServicios().subscribe((resp:any) => {
      this.servicios = resp.servicios
    })
  }

}
