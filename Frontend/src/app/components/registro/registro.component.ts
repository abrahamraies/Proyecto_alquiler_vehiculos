import { Cliente } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  // Creamos la variable cliente de tipo cliente y la instaciamos
  cliente:Cliente = new Cliente();

  // Invocamos los servicios y las clases necesarias para luego ser utilizados por el componente
  constructor(private router: Router,private loginService:AuthService) { }

  ngOnInit(): void {
  }

  /* Este metodo se encarga de suscribirse al metodo registrarCliente, informa al cliente la
  confirmacion de su registro. Luego, se suscribe al metodo loginCliente para ingresar de manera
  automatica en la cuenta. Finalmente, si la validacion es correcta, le da la bienvenida, lo redirecciona al home, settea el token, el usuario y el rol. En caso de que la validacion sea incorrecta, informa el error al usuario */
  crearCliente(){
    this.loginService.registrarCliente(this.cliente).subscribe();

    let link = [''];
    this.loginService.loginCliente(this.cliente.correo,this.cliente.password).subscribe({
      next: (v:any) => {swal("Bienvenido!", "Su registro ha sido completado con exito!", "success"),this.router.navigate(link),this.loginService.setToken(v.password),this.loginService.SetIdUser(v.idcliente),this.loginService.setIdRol(v.rol)},
      error: (e:any) => {swal("Error!", "Ha ocurrido un error", "error")}
    });

  }

}
