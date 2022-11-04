import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalsVenado';

  // Invocamos el servicio a utilizar por el componente
  constructor(private loginService:AuthService){

  }

  // Este metodo cierra la sesion del usuario
  Logout(){
    this.loginService.clear();
  }

  // Este metodo valida si el usuario esta logeado
  estaLogueado(){
    return this.loginService.isLogged();
  }

  // Este metodo valida que tipo de usuario es
  tipoUsuario(){
    return this.loginService.getIdRol();
  }


}
