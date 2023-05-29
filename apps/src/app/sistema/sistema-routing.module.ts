import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodySistemaComponent } from './components/body-sistema/body-sistema.component';
import { HomeSistemaComponent } from './components/home-sistema/home-sistema.component';
import { EspecialidadesSistemaComponent } from './components/especialidades-sistema/especialidades-sistema.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { MisSolicitudesCitasComponent } from './components/mis-solicitudes-citas/mis-solicitudes-citas.component';

const routes: Routes = [
  {
    path : '',
    component : BodySistemaComponent,
    children : [
      { path : "", component : HomeSistemaComponent },
      { path : "pagos", component : PagosComponent},
      { path : "especialidades", component : EspecialidadesSistemaComponent },
      { path : "servicios", component : ServiciosComponent },
      { path : "citas", component : MisSolicitudesCitasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
