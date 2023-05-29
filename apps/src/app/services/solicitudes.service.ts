import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const _token = localStorage.getItem('_token')

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization':  'Bearer '+_token,
    'Access-Control-Allow-Methods' : 'PUT, POST, GET, DELETE'
  })
};

const SimplehttpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'    
  })
};

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(
    private route : HttpClient
  ) { }


  misSolicitudesCitas(){    
    return this.route.get(`${environment.apiHost}/api/v1/mis-solicitudes-citas`, httpOptions);    
  }

  store(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/store-cita`,data, httpOptions);    
  }

  confirmar(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/solicitud-confirmar`,data, httpOptions);    
  }

  rechazar(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/solicitud-rechazar`,data, httpOptions);    
  }

  concretar(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/solicitud-concretar`,data, httpOptions);    
  }
}
