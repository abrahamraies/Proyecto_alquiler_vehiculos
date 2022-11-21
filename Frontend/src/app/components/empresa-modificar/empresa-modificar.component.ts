import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/interfaces';
import { EmpresaService } from 'src/app/services/empresa.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-empresa-modificar',
  templateUrl: './empresa-modificar.component.html',
  styleUrls: ['./empresa-modificar.component.css']
})
export class EmpresaModificarComponent implements OnInit {

  // Creamos una variable de tipo Empresa y la instanciamos
  empresaUtilizada:Empresa = new Empresa();

  // Invocamos los servicios a utilizar por el componente
  constructor(private empresaService:EmpresaService,private loginService:AuthService) { }

  // Llamamos al metodo obtener empresa
  ngOnInit(): void {
    this.obtenerEmpresa();
  }

  // Se obtiene el id del usuario mediante el servicio de autenticacion
  /* Se suscribe al metodo obtenerEmpresa del servicio empresaService. Mediante este metodo
  obtiene los datos de una empresa y los retorna a la variable creada (empresaUtilizada)*/
  private obtenerEmpresa() {
    let searchID = this.loginService.getIdUser();
    this.empresaService.obtenerEmpresa(searchID).subscribe((dato) => {
      this.empresaUtilizada = dato;
    });
  }

  /* Este metodo se encarga de suscribirse al servicio de empresa y utilizar el metodo para actualizar
  la entidad*/
  modificarEmpresa(){
    this.empresaService.actualizarEmpresa(this.empresaUtilizada.idempresa,this.empresaUtilizada).subscribe();

    swal("Tu empresa ha sido modificada con exito!", "", "success");
  }

}
