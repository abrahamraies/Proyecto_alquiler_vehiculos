import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../services/vehiculo.service';
import { Router } from '@angular/router';
import { Vehiculo } from '../interfaces/interfaces';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css'],
})
export class ListaVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[];

  constructor(
    private router: Router,
    private vehiculoServicio: VehiculoService,
    private loginService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerVehiculos();
  }


  private obtenerVehiculos() {
    if(this.loginService.getIdRol() == 2){
      this.vehiculoServicio.obtenerListaVehiculosEmpresa(this.loginService.getIdUser()).subscribe((dato) =>{
        this.vehiculos = dato;
      })
    }else{
      this.vehiculoServicio.obtenerListaVehiculos().subscribe((dato) => {
        this.vehiculos = dato;
      });
    }

  }

  SeleccionarVehiculo(vehiculo: Vehiculo) {
    let link = ['/registrar-alquiler', vehiculo.idvehiculo];
    this.router.navigate(link);
  }

  ModificarVehiculo(vehiculo: Vehiculo) {
    let link = ['/modificarVehiculo', vehiculo.idvehiculo];
    this.router.navigate(link);
  }

  tipoUsuario(){
    return this.loginService.getIdRol();
  }

}
