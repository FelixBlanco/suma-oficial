import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-mis-solicitudes-citas',
  templateUrl: './mis-solicitudes-citas.component.html',
  styleUrls: ['./mis-solicitudes-citas.component.scss']
})
export class MisSolicitudesCitasComponent implements OnInit {

  solicitudes : any = []
  rolId : any = null

  constructor(
    private _solicitudes : SolicitudesService    
  ) { }

  ngOnInit(): void {
    this.misSolicitudes()
  }

  misSolicitudes(){
    this._solicitudes.misSolicitudesCitas().subscribe((resp:any) => {
      this.solicitudes = resp.solicitudes
      this.rolId = resp.rol_id      
    })
  }

  confirmar(idSolicitud:any){
    this._solicitudes.confirmar({solicitud_id : idSolicitud}).subscribe((resp:any) => {
      this.misSolicitudes()
    })
  }

  rechazar(idSolicitud:any){
    this._solicitudes.rechazar({solicitud_id : idSolicitud}).subscribe((resp:any) => {
      this.misSolicitudes()
    })
  }

  concretar(idSolicitud:any){
    this._solicitudes.concretar({solicitud_id : idSolicitud}).subscribe((resp:any) => {
      this.misSolicitudes()
    })
  }

}
