import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-regitro-empresa',
  templateUrl: './regitro-empresa.component.html',
  styleUrls: ['./regitro-empresa.component.css']
})
export class RegitroEmpresaComponent implements OnInit {

  // Creamos la variable empresa de tipo empresa y la instaciamos
  empresa:Empresa = new Empresa();

  // Invocamos los servicios y las clases necesarias para luego ser utilizados por el componente
  constructor(private router: Router,private loginService:AuthService) { }

  ngOnInit(): void {
  }

  /* Este metodo se encarga de suscribirse al metodo registrarEmpresa, informa al usuario la
  confirmacion de su registro. Luego, se suscribe al metodo loginEmpresa para ingresar de manera
  automatica en la cuenta. Finalmente, si la validacion es correcta, le da la bienvenida, lo redirecciona al home, settea el token, el usuario y el rol. En caso de que la validacion sea incorrecta, informa el error al usuario */
  crearEmpresa(){
    this.loginService.registrarEmpresa(this.empresa).subscribe();

    alert("Su registro ha sido realizado con éxito ");
    let link = [''];
    this.loginService.loginEmpresa(this.empresa.correo,this.empresa.password).subscribe({
      next: (v:any) => {alert("Bienvenido!"),this.router.navigate(link),this.loginService.setToken(v.password),this.loginService.SetIdUser(v.idempresa),this.loginService.setIdRol(v.rol)},
      error: (e:any) => {alert("El correo electronico ingresado o la contraseña no son correctos")}
    });
  }
}
