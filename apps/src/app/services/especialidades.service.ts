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
export class EspecialidadesService {

  constructor(
    private route : HttpClient
  ) { }


  especialidades(){
    return this.route.get(`${environment.apiHost}/api/v1/especialidades`, httpOptions);    
  }

  especialidadesUser(){
    return this.route.get(`${environment.apiHost}/api/v1/especialidades-user`, httpOptions);    
  }

  store(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/especialidades-user`,data, httpOptions);    
  }

}
