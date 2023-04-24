import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { BodySistemaComponent } from './components/body-sistema/body-sistema.component';
import { HomeSistemaComponent } from './components/home-sistema/home-sistema.component';
import { EspecialidadesSistemaComponent } from './components/especialidades-sistema/especialidades-sistema.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BodySistemaComponent,
    HomeSistemaComponent,
    EspecialidadesSistemaComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SistemaModule { }
