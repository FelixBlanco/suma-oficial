import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-card-servicios-show',
  templateUrl: './card-servicios-show.component.html',
  styleUrls: ['./card-servicios-show.component.scss']
})
export class CardServiciosShowComponent implements OnInit {

  servicio : any = []
  params : any = []

  constructor(
    private Route: ActivatedRoute,
    private _servicios : ServiciosService
  ) { }

  ngOnInit(): void {
    this.params = this.Route.snapshot.params
    this.getServicios()
  }

  getServicios(){    
    this._servicios.publicServiciosShow(this.params.id).subscribe((resp:any) => {
      this.servicio = resp.servicio
    })
  }

}
