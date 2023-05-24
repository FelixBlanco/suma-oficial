import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-sistema',
  templateUrl: './home-sistema.component.html',
  styleUrls: ['./home-sistema.component.scss']
})
export class HomeSistemaComponent implements OnInit {

  form : FormGroup

  constructor(
    private fb : FormBuilder
  ) { 
    this.form = this.fb.group({
      descripcion : [''],
      monto : ['']
    })
  }

  ngOnInit(): void {

  }

  getServicios(){

  }

  store(){
    
  }

}
