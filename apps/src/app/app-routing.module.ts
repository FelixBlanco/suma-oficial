import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {
    path : '', 
    component : BodyComponent,
    children:[
      { path : '', component : LandingComponent },
      { path : 'login', component : LoginComponent },
      { path : 'register', component : RegisterComponent },
    ]
  },
  {      
    path : 's',
    loadChildren : () => import("./sistema/sistema.module").then(m => m.SistemaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
