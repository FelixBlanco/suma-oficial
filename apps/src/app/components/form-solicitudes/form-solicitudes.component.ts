import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

declare var $:any

@Component({
  selector: 'app-form-solicitudes',
  templateUrl: './form-solicitudes.component.html',
  styleUrls: ['./form-solicitudes.component.scss']
})
export class FormSolicitudesComponent implements OnInit {

  @Input()servicio_id : any = null
  @Input() userId : any = null;

  form : FormGroup
  isLogin : boolean = false;
  isMismoProfesional : boolean = false;

  constructor(
    private fb:FormBuilder,
    private _solicitudes : SolicitudesService,
    private _auth : AuthService
  ) { 
    this.form = this.fb.group({
      fecha : [''],
      servicio_id : ['']
    })
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this._auth.user().subscribe((resp:any) => {
      this.isLogin = true
      console.log(resp)
      this.isMismoProfesional = (resp.id == this.userId)? true : false 
    },(error:any) => this.isLogin = false )
  }

  setDate(e:any){
    this.form.controls['fecha'].setValue(e.target.value)
    this.form.controls['servicio_id'].setValue(this.servicio_id)    
  }

  storeCita(){    
    this._solicitudes.store(this.form.value).subscribe((resp:any) => $("#SolicitudesModal").modal("hide") )
  }

}
