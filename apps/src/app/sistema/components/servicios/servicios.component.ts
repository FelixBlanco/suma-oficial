import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  form : FormGroup
  servicios : any = []
  isEdit : boolean = false;

  constructor(
    private fb : FormBuilder,
    private _servicios : ServiciosService
  ) { 
    this.form = this.fb.group({
      id          : [''],
      descripcion : [''],
      monto       : ['']
    })
  }

  ngOnInit(): void {
    this.getServicios()
  }


  getServicios(){
    this._servicios.misServicios().subscribe((resp:any) => {
      this.servicios = resp.servicios
    })
  }

  store(){
    this._servicios.store(this.form.value).subscribe((resp:any) => {
      this.form.reset()
      this.getServicios()
    })    
  }

  edit(datos:any){
    this.form.controls['id'].setValue(datos.id)
    this.form.controls['descripcion'].setValue(datos.descripcion)
    this.form.controls['monto'].setValue(datos.monto)
    this.isEdit = true;
  }

  upgrade(){
    this._servicios.upgrade(this.form.value).subscribe((resp:any) => {
      this.getServicios()
    })
  }

  destroy(id:any){
    this._servicios.destroy(id).subscribe((resp:any) => {
      this.getServicios()
    })
  }
}
