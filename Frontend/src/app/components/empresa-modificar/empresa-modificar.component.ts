import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/interfaces/interfaces';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa-modificar',
  templateUrl: './empresa-modificar.component.html',
  styleUrls: ['./empresa-modificar.component.css']
})
export class EmpresaModificarComponent implements OnInit {

  empresaUtilizada:Empresa = new Empresa();

  constructor(private empresaService:EmpresaService,private loginService:AuthService) { }

  ngOnInit(): void {
    this.obtenerEmpresa();
  }

  private obtenerEmpresa() {
    let searchID = this.loginService.getIdUser();
    this.empresaService.obtenerEmpresa(searchID).subscribe((dato) => {
      this.empresaUtilizada = dato;
    });
  }

  modificarEmpresa(){
    this.empresaService.actualizarEmpresa(this.empresaUtilizada.idempresa,this.empresaUtilizada).subscribe();

    alert("Tus datos han sido modificados con exito!");
  }

}
