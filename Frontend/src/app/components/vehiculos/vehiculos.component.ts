import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/interfaces/interfaces';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  // Creamos 2 variables, una de tipo File y la otra de tipo Vehiculo. A esta ultima la instanciamos
  selectedFile: File;
  vehiculo : Vehiculo = new Vehiculo();

  // Invocamos los servicios y las clases necesarias para luego ser utilizados por el componente
  constructor(private router: Router,private vehiculoService:VehiculoService,private loginService:AuthService) { }

  ngOnInit(): void {
  }

  /* Este metodo es una funcion dentro del html, al seleccionar una imagen este llama al metodo
  uploadFile y le envia como parametro la imagen seleccionada*/
  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];

    this.uploadFile(this.selectedFile);
  }

  /* Este metodo se encarga de suscribirse al metodo uploadImage enviandole como parametro
  la imagen seleccionada previamente */
  uploadFile(file){
    this.vehiculoService.uploadImage(file).subscribe((dato => {

    }));
  }

  /** Este metodo se encarga de instanciar el atributo idEmpresa de la variable vehiculo con el id
  usuario generado al momento del login. Luego, instancia el atributo imagen con la imagen seleccionada
  previamente y se suscribe al metodo crear vehiculo enviandole como parametro el vehiculo con sus
  respectivos atributos instanciados. Por ultimo, se le informa al usuario mediante un alert y se
  lo redirecciona al home */
  crearVehiculo(){
    this.vehiculo.idempresa = this.loginService.getIdUser();

    this.vehiculo.imagen = this.selectedFile.name;
    this.vehiculoService.crearVehiculo(this.vehiculo).subscribe();

    swal.fire("Su vehiculo ha sido registrado con exito", "", "success");
    let link = [''];
    this.router.navigate(link);
  }
}
