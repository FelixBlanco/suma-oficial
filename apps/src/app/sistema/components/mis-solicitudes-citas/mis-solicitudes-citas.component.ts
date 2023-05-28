import { Component, OnInit } from '@angular/core';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-mis-solicitudes-citas',
  templateUrl: './mis-solicitudes-citas.component.html',
  styleUrls: ['./mis-solicitudes-citas.component.scss']
})
export class MisSolicitudesCitasComponent implements OnInit {

  solicitudes : any = []

  constructor(
    private _solicitudes : SolicitudesService
  ) { }

  ngOnInit(): void {
    this.misSolicitudes()
  }

  misSolicitudes(){
    this._solicitudes.misSolicitudesCitas().subscribe((resp:any) => {
      this.solicitudes = resp.solicitudes
    })
  }

}
