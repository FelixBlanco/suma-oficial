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
export class ServiciosService {

  constructor(
    private route : HttpClient
  ) { }

  publicServicios(){
    return this.route.get(`${environment.apiHost}/api/v1/servicios-publicos`, SimplehttpOptions);    
  }

  publicServiciosShow(id:any){
    return this.route.get(`${environment.apiHost}/api/v1/servicios-publicos-show/${id}`, SimplehttpOptions);    
  }

  misServicios(){
    return this.route.get(`${environment.apiHost}/api/v1/mis-servicios`, httpOptions);    
  }

  store(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/store-servicios`,data, httpOptions);    
  }

  upgrade(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/upgrade-servicios`,data, httpOptions);    
  }

  destroy(id:any){
    return this.route.get(`${environment.apiHost}/api/v1/destroy-servicios/${id}`, httpOptions);    
  }
}
