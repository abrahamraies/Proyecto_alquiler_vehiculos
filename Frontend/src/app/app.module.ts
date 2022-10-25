import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVehiculosComponent } from './components/lista-vehiculos/lista-vehiculos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { RegistrarAlquilerVehiculoComponent } from './components/registrar-alquiler-vehiculo/registrar-alquiler-vehiculo.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegitroEmpresaComponent } from './components/regitro-empresa/regitro-empresa.component';
import { LoginEmpresaComponent } from './components/login-empresa/login-empresa.component';
import { VehiculosComponent } from './components/vehiculos/vehiculos.component';
import { ModificarVehiculoComponent } from './components/modificar-vehiculo/modificar-vehiculo.component';
import { EmpresaModificarComponent } from './components/empresa-modificar/empresa-modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVehiculosComponent,
    HomeComponent,
    RegistrarAlquilerVehiculoComponent,
    LoginComponent,
    RegistroComponent,
    RegitroEmpresaComponent,
    LoginEmpresaComponent,
    VehiculosComponent,
    ModificarVehiculoComponent,
    EmpresaModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
