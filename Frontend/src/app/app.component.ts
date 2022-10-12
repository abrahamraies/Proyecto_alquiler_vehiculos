import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalsVenado';

  constructor(private loginService:AuthService){

  }

  Logout(){
    this.loginService.logout();
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }


}
