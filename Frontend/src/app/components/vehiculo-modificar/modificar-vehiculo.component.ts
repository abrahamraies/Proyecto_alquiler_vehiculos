import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehiculo } from 'src/app/interfaces/interfaces';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-modificar-vehiculo',
  templateUrl: './modificar-vehiculo.component.html',
  styleUrls: ['./modificar-vehiculo.component.css']
})
export class ModificarVehiculoComponent implements OnInit {

  // Creamos dos variable, una de tipo vehiculo y otra de tipo file
  vehiculoSeleccionado: Vehiculo;
  selectedFile: File;

  // Invocamos los servicios a utilizar por el componente
  constructor(private router: Router,private _route:ActivatedRoute,private vehiculoService:VehiculoService) { }

  /* Obtenemos el id del vehiculo que se desea modificar y luego llamamos al metodo obtenerVehiculo
  enviandole la variable previamente creada*/
  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.obtenerVehiculo(id!);
  }

  /* En este metodo creamos una variable que convierte a entero el parametro recibido, luego nos
  suscribimos al metodo obtenerVehiculo del servicio vehiculo enviandole la variable creada
  previamente. Luego le asignamos el valor retornado a la variable vehiculoSeleccionado*/
  private obtenerVehiculo(cod: string) {
    var codigo = parseInt(cod);
    this.vehiculoService.obtenerVehiculo(codigo).subscribe((dato) => {
      this.vehiculoSeleccionado = dato;
    });
  }

  // Este metodo captura el evento en el cual la empresa selecciona una imagen para subir
  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];

    this.uploadFile(this.selectedFile);
  }

  // Este metodo se encarga de suscribirse y utilizar el metodo uploadImage del servicio vehiculo
  uploadFile(file){
    this.vehiculoService.uploadImage(file).subscribe((dato => {

    }));
  }

  /* Este metodo se encarga de suscribirse al metodo actualizarVehiculo del servicio vehiculo, luego
  muestra una alerta informando la modificacion y redirige al usuario al home*/
  modificarVehiculo(){
    this.vehiculoService.actualizarVehiculo(this.vehiculoSeleccionado.idvehiculo,this.vehiculoSeleccionado).subscribe((dato =>{

    }));

    swal("Su vehiculo ha sido modificado con exito", "", "success");
    let link = [''];
    this.router.navigate(link);
  }

  /* Este metodo se encarga de deshabilitar un vehiculo mediante la suscripcion al metodo
  deshabilitarVehiculo. Luego muestra una alerta informando la modificacion y redigire al usuario al home*/
  deshabilitar(){

    this.vehiculoService.deshabilitarVehiculo(this.vehiculoSeleccionado.idvehiculo).subscribe((dato => {

    }));

    swal("Su vehiculo ha sido deshabilitado con exito", "", "info");
    let link = [''];
    this.router.navigate(link);
  }

  /* Este metodo se encarga de habilitar un vehiculo mediante la suscripcion al metodo
  habilitarVehiculo. Luego muestra una alerta informando la modificacion y redigire al usuario al home*/
  habilitar(){

    this.vehiculoService.habilitarVehiculo(this.vehiculoSeleccionado.idvehiculo).subscribe((dato => {

    }));

    swal("Su vehiculo ha sido habilitado con exito", "", "success");
    let link = [''];
    this.router.navigate(link);
  }
}


