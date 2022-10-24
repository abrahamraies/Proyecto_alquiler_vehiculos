import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/interfaces/interfaces';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  selectedFile: File;
  vehiculo : Vehiculo = new Vehiculo();

  constructor(private router: Router,private vehiculoService:VehiculoService,private loginService:AuthService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];

    this.uploadFile(this.selectedFile);
  }

  uploadFile(file){
    this.vehiculoService.uploadImage(file).subscribe((dato => {
      console.log(dato);
    }));
  }

  crearVehiculo(){
    this.vehiculo.idempresa = this.loginService.getIdUser();
    console.log(this.vehiculo);
    this.vehiculo.imagen = this.selectedFile.name;
    this.vehiculoService.crearVehiculo(this.vehiculo).subscribe();

    alert("Su vehiculo ha sido creado con exito ");
    let link = [''];
    this.router.navigate(link);
  }
}
