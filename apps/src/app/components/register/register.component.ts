import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  form : FormGroup
  rol : any = null;

  constructor(
    private fb : FormBuilder,
    private _auth : AuthService
  ) { 
    this.form = this.fb.group({
      name : [''],
      email : [''],
      password : [''],
      rol_id : ['']
    })
  }

  ngOnInit(): void {
  }

  register(){
    this._auth.register(this.form.value).subscribe((resp:any) => {
      this.Login()
    })
  }

  Login(){
    this._auth.verfiLogin(this.form.value).subscribe((resp:any) => {
      localStorage.setItem('_token',resp.access_token)  
      location.href = 's/'
      this.form.reset()
    })
  }

  selectRol(e:any){
    this.rol = e.target.value
    this.form.controls['rol_id'].setValue(this.rol)
  }
}
