import { Component, OnInit} from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Vehiculo,Alquiler } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registrar-alquiler-vehiculo',
  templateUrl: './registrar-alquiler-vehiculo.component.html',
  styleUrls: ['./registrar-alquiler-vehiculo.component.css']
})
export class RegistrarAlquilerVehiculoComponent implements OnInit {

  vehiculos : Vehiculo;
  alquiler : Alquiler = new Alquiler();
  searchClientId = this.loginService.getIdUser();

  constructor(private vehiculoServicio:VehiculoService, private _route:ActivatedRoute,  private router: Router, private loginService:AuthService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.mostrarVehiculos(id!)
  }

  guardarAlquiler(){
    this.alquiler.idvehiculo = this.vehiculos.idvehiculo;
    this.alquiler.idcliente = this.searchClientId;
    console.log(this.alquiler);

    this.vehiculoServicio.registrarAlquiler(this.alquiler).subscribe();
    this.deshabilitarVehiculo(this.alquiler.idvehiculo);
  }

  private mostrarVehiculos(cod: string){
    var codigo = parseInt(cod);
    this.vehiculoServicio.obtenerVehiculo(codigo)
    .subscribe(dato => {
      this.vehiculos = dato;
    })
  }

  deshabilitarVehiculo(idvehiculo:number){
    this.vehiculoServicio.deshabilitarVehiculo(idvehiculo).subscribe();
    alert("Su alquiler ha sido confirmado con éxito ");
    let link = ['/vehiculos'];
    this.router.navigate(link);
  }

  onSubmit(){
    this.guardarAlquiler();
  }


}


