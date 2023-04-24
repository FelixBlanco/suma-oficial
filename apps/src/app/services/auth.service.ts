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
export class AuthService {

  constructor(
    private route : HttpClient
  ) { }

  
  register(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/register`,data, SimplehttpOptions);    
  }

  verfiLogin(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/login`,data, SimplehttpOptions);    
  }
  user(){
    return this.route.get(`${environment.apiHost}/api/v1/user`, httpOptions);    
  }

  salir(){
    return this.route.get(`${environment.apiHost}/api/v1/logout`, httpOptions);    
  }

  changePassword(data:any){
    return this.route.post(`${environment.apiHost}/api/v1/change-password`,data, SimplehttpOptions);    
  }
  
  logout(){
    return this.route.get(`${environment.apiHost}/api/v1/logout`, httpOptions);    
  }
}
