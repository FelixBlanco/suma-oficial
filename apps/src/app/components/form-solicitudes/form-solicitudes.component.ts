import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

declare var $:any

@Component({
  selector: 'app-form-solicitudes',
  templateUrl: './form-solicitudes.component.html',
  styleUrls: ['./form-solicitudes.component.scss']
})
export class FormSolicitudesComponent implements OnInit {

  @Input()servicio_id : any = null
  form : FormGroup
  
  constructor(
    private fb:FormBuilder,
    private _solicitudes : SolicitudesService
  ) { 
    this.form = this.fb.group({
      fecha : [''],
      servicio_id : ['']
    })
  }

  ngOnInit(): void {

  }

  setDate(e:any){
    this.form.controls['fecha'].setValue(e.target.value)
    this.form.controls['servicio_id'].setValue(this.servicio_id)    
  }

  storeCita(){    
    this._solicitudes.store(this.form.value).subscribe((resp:any) => $("#SolicitudesModal").modal("hide") )
  }

}
