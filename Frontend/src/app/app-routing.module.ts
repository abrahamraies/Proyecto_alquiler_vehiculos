import { ModificarVehiculoComponent } from './components/vehiculo-modificar/modificar-vehiculo.component';
import { RegistrarAlquilerVehiculoComponent } from './components/registro-alquiler-vehiculo/registrar-alquiler-vehiculo.component';
import { HomeComponent } from './components/home/home.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegitroEmpresaComponent } from './components/registro-empresa/regitro-empresa.component';
import { LoginEmpresaComponent } from './components/login-empresa/login-empresa.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { EmpresaModificarComponent } from './components/empresa-modificar/empresa-modificar.component';

const routes: Routes = [
  {path : 'vehiculos', component:ListaVehiculosComponent},
  {path: 'ingresarvehiculo',component:VehiculosComponent},
  {path : '', component:HomeComponent},
  {path: 'registrar-alquiler/:id',component:RegistrarAlquilerVehiculoComponent},
  {path: 'login',component:LoginComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'registroEmpresa',component:RegitroEmpresaComponent},
  {path: 'loginEmpresa',component:LoginEmpresaComponent},
  {path: 'modificarEmpresa',component:EmpresaModificarComponent},
  {path: 'modificarVehiculo/:id',component:ModificarVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
