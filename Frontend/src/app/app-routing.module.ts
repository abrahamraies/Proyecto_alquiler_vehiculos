import { RegistrarAlquilerVehiculoComponent } from './registrar-alquiler-vehiculo/registrar-alquiler-vehiculo.component';
import { HomeComponent } from './home/home.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegitroEmpresaComponent } from './components/regitro-empresa/regitro-empresa.component';
import { LoginEmpresaComponent } from './components/login-empresa/login-empresa.component';

const routes: Routes = [
  {path : 'vehiculos', component:ListaVehiculosComponent},
  {path : '', component:HomeComponent},
  {path: 'registrar-alquiler/:id',component:RegistrarAlquilerVehiculoComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'registroEmpresa',component:RegitroEmpresaComponent},
  {path: 'loginEmpresa',component:LoginEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
