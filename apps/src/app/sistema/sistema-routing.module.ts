import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodySistemaComponent } from './components/body-sistema/body-sistema.component';
import { HomeSistemaComponent } from './components/home-sistema/home-sistema.component';

const routes: Routes = [
  {
    path : '',
    component : BodySistemaComponent,
    children : [
      { path : "", component : HomeSistemaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
