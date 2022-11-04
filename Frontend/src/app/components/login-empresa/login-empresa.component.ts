import { Empresa } from './../../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent implements OnInit {

  // Creamos una variable de tipo empresa y la instaciamos
  empresa:Empresa = new Empresa();

  // // Invocamos los servicios a utilizar por el componente
  constructor(private router: Router,private loginService:AuthService) { }

  ngOnInit(): void {
  }

  /* Este metodo crea una variable de tipo Array, luego se suscribe al metodo loginEmpresa del
  servicio de autenticacion enviandole los parametros necesarios.
  En caso de exito, lanza una alerta de bienvenida, redirige la empresa al home, setea un token
  para la empresa, setea el id de la empresa y por último, setea el rol de la misma (estas variables
  son creadas en el servicio de autenticacion)*/
  loginEmpresa(){
    let link = [''];
    this.loginService.loginEmpresa(this.empresa.correo,this.empresa.password).subscribe({
      next: (v:any) => {alert("Bienvenido!"),this.router.navigate(link),this.loginService.setToken(v.password),this.loginService.SetIdUser(v.idempresa),this.loginService.setIdRol(v.rol)},
      error: (e:any) => {alert("El correo electronico ingresado o la contraseña no son correctos"),console.log(e)}
    });

  }

  // Este metodo se encarga de enviar a la empresa al template del registro
  registro() {
    let link = ['/registroEmpresa'];
    this.router.navigate(link);
  }

}
