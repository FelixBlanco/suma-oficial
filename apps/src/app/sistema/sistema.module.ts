import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { BodySistemaComponent } from './components/body-sistema/body-sistema.component';
import { HomeSistemaComponent } from './components/home-sistema/home-sistema.component';
import { EspecialidadesSistemaComponent } from './components/especialidades-sistema/especialidades-sistema.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PagosComponent } from './components/pagos/pagos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

@NgModule({
  declarations: [
    BodySistemaComponent,
    HomeSistemaComponent,
    EspecialidadesSistemaComponent,
    PagosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SistemaModule { }
