import { Component, OnInit} from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Vehiculo,Alquiler } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-registrar-alquiler-vehiculo',
  templateUrl: './registrar-alquiler-vehiculo.component.html',
  styleUrls: ['./registrar-alquiler-vehiculo.component.css']
})
export class RegistrarAlquilerVehiculoComponent implements OnInit {

  /*Creamos 3 variables e instanciamos 2 de ellas*/
  vehiculos : Vehiculo;
  alquiler : Alquiler = new Alquiler();
  searchClientId = this.loginService.getIdUser();

  // Invocamos los servicios a utilizar por el componente
  constructor(private vehiculoServicio:VehiculoService, private _route:ActivatedRoute,  private router: Router, private loginService:AuthService) { }

  // Obtenemos el parametro id enviado a la pestaña. Luego se lo enviamos al metodo mostrarVehiculos
  ngOnInit(): void {
    let id = this._route.snapshot.paramMap.get('id');
    this.mostrarVehiculos(id!);
    if(this.loginService.getIdUser() == null || this.loginService.getIdUser() == ""){
      swal("Advertencia!", "Debes estar registrado para realizar el alquiler de un vehiculo!", "info");
    }
  }

  /* Este metodo se encarga de instanciar los atributos idvehiculo e idcliente de la interfaz alquiler
  Luego, se suscribe al metodo registrarAlquiler enviadole como parametro la variable alquiler. Por ultimo,
  se encarga de llamar al metodo deshabilitarVehiculo enviandole como parametro el id del vehiculo alquilado*/
  guardarAlquiler(){
    this.alquiler.idvehiculo = this.vehiculos.idvehiculo;
    this.alquiler.idcliente = this.searchClientId;

    this.vehiculoServicio.registrarAlquiler(this.alquiler).subscribe();
    this.deshabilitarVehiculo(this.alquiler.idvehiculo);
  }

  /* Este metodo recibe como parametro el id del vehiculo seleccionado para mostrarlo. Esto lo hace
  mediante la suscripcion al metodo obtenerVehiculo*/
  private mostrarVehiculos(cod: string){
    var codigo = parseInt(cod);
    this.vehiculoServicio.obtenerVehiculo(codigo)
    .subscribe(dato => {
      this.vehiculos = dato;
    })
  }

  /* Este metodo se encarga de deshabilitar un vehiculo mediante la suscripcion al metodo
  deshabilitarVehiculo. Luego, redirecciona al usuario a la lista de vehiculos */
  deshabilitarVehiculo(idvehiculo:number){
    this.vehiculoServicio.deshabilitarVehiculo(idvehiculo).subscribe();
    swal("Felicitaciones", "Su alquiler ha sido confirmado con exito!", "success");
    let link = ['/vehiculos'];
    this.router.navigate(link);
  }

  /* Este metodo es una funcion en el html, la cual al ser presionado el boton llama al metodo
  guardarAlquiler */
  onSubmit(){
    this.guardarAlquiler();
  }


}


