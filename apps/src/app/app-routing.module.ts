import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BodyComponent } from './components/body/body.component';
import { CardServiciosShowComponent } from './components/card-servicios-show/card-servicios-show.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path : '', 
    component : BodyComponent,
    children:[
      { path : '', component : LandingComponent },
      { path : 'login', component : LoginComponent },
      { path : 'register', component : RegisterComponent },
      { path : 's/:id', component : CardServiciosShowComponent },
      { path : 'perfil', component : PerfilComponent},
      {      
        path : 'a',
        loadChildren : () => import("./sistema/sistema.module").then(m => m.SistemaModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
