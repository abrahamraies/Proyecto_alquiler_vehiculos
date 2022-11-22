import { Cliente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Creamos una variable de tipo cliente y la intanciamos
  cliente:Cliente = new Cliente();

  // Invocamos los servicios a utilizar por el componente
  constructor(private router: Router,private loginService:AuthService) { }

  ngOnInit(): void {
  }

  /* Este metodo crea una variable de tipo Array, luego se suscribe al metodo loginCliente del
  servicio de autenticacion enviandole los parametros necesarios.
  En caso de exito, lanza una alerta de bienvenida, redirige el cliente al home, setea un token
  para el cliente, setea el id del cliente y por último, setea el rol del mismo (estas variables son creadas en el servicio de autenticacion)*/
  loginCliente(){
    let link = [''];
    this.loginService.loginCliente(this.cliente.correo,this.cliente.password).subscribe({
      next: (v:any) => {swal.fire("Bienvenido!", "", "success"),this.router.navigate(link),this.loginService.setToken(v.password),this.loginService.SetIdUser(v.idcliente),this.loginService.setIdRol(v.rol)},
      error: (e:any) => {swal.fire("Error!", "El correo electronico ingresado o la contraseña no coinciden", "error")}
    });
}

  // Este metodo se encarga de enviar al cliente al template del registro
  registro() {
    let link = ['/registro'];
    this.router.navigate(link);
  }

}
