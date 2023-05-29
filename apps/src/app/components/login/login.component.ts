import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form : FormGroup

  constructor(
    private fb : FormBuilder,
    private _auth : AuthService
  ) { 
    this.form = this.fb.group({      
      email : [''],
      password : ['']
    })
  }

  ngOnInit(): void {
  }

  Login(){
    this._auth.verfiLogin(this.form.value).subscribe((resp:any) => {
      localStorage.setItem('_token',resp.access_token)  
      location.href = '/'
      this.form.reset()
    })
  }
}
