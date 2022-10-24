import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-modificar-vehiculo',
  templateUrl: './modificar-vehiculo.component.html',
  styleUrls: ['./modificar-vehiculo.component.css']
})
export class ModificarVehiculoComponent implements OnInit {

  vehiculoSeleccionado: Vehiculo;
  selectedFile: File;


  constructor(private router: Router,private _route:ActivatedRoute,private vehiculoService:VehiculoService) { }

  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.obtenerVehiculo(id!);
  }

  private obtenerVehiculo(cod: string) {
    var codigo = parseInt(cod);
    this.vehiculoService.obtenerVehiculo(codigo).subscribe((dato) => {
      this.vehiculoSeleccionado = dato;
    });
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];

    this.uploadFile(this.selectedFile);
  }

  uploadFile(file){
    this.vehiculoService.uploadImage(file).subscribe((dato => {
      console.log(dato);
    }));
  }

  modificarVehiculo(){
    this.vehiculoService.actualizarVehiculo(this.vehiculoSeleccionado.idvehiculo,this.vehiculoSeleccionado).subscribe((dato =>{
      console.log(dato);
    }));

    alert("Su vehiculo ha sido modificado con exito ");
    let link = [''];
    this.router.navigate(link);
  }

  deshabilitar(){
    console.log(this.vehiculoSeleccionado);
    this.vehiculoService.deshabilitarVehiculo(this.vehiculoSeleccionado.idvehiculo).subscribe((dato => {
      console.log(dato);
    }));

    alert("Su vehiculo ha sido desahabilitado");
    let link = [''];
    this.router.navigate(link);
  }

  habilitar(){
    console.log(this.vehiculoSeleccionado);
    this.vehiculoService.habilitarVehiculo(this.vehiculoSeleccionado.idvehiculo).subscribe((dato => {
      console.log(dato);
    }));

    alert("Su vehiculo ha sido habilitado");
    let link = [''];
    this.router.navigate(link);
  }
}


