import { Component, OnInit } from '@angular/core';
import { EspecialidadesService } from 'src/app/services/especialidades.service';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-especialidades-sistema',
  templateUrl: './especialidades-sistema.component.html',
  styleUrls: ['./especialidades-sistema.component.scss']
})
export class EspecialidadesSistemaComponent implements OnInit {

  especialidades : any = []
  mis_especialidades : any = []
  form : FormGroup

  constructor(
    private _especialidades : EspecialidadesService,
    private fb : FormBuilder
  ) { 
    this.form = this.fb.group({
      especialidad_id : ['']
    })
  }

  ngOnInit(): void {
    this.getEspecialidades()
    this.misEspecialidades()
  }

  getEspecialidades(){
    this._especialidades.especialidades().subscribe((resp:any) => this.especialidades = resp.especialidades)
  }

  misEspecialidades(){
    this._especialidades.especialidadesUser().subscribe((resp:any) => this.mis_especialidades = resp.especialidades)
  }

  selectEspecialidad(e:any){
    this.form.controls['especialidad_id'].setValue(e.target.value)
  }

  storeEspecialidades(){
    const value = this.form.value
    this._especialidades.store(value).subscribe((resp:any) => {
      this.mis_especialidades = resp.especialidades      
      this.misEspecialidades()
    })
  }

}
