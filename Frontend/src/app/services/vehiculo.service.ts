
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler,Vehiculo } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  //URL backend
  private baseUrl = "http://localhost:8080/RentalsVenado";


  constructor(private httpClient : HttpClient) { }

  //Este metodo devuleve los vehiculos
  obtenerListaVehiculos(): Observable<Vehiculo[]>{
    return this.httpClient.get<Vehiculo[]>(`${this.baseUrl}/vehiculos`);
  }
  //Este metodo devuleve los vehiculos
  obtenerListaVehiculosEmpresa(id:number): Observable<Vehiculo[]>{
    return this.httpClient.get<Vehiculo[]>(`${this.baseUrl}/empresas/obtenerVehiculos/${id}`);
  }
  //Este metodo obtiene un solo vehiculo (el seleccionado)
  obtenerVehiculo(id:number):Observable<Vehiculo>{
    return this.httpClient.get<Vehiculo>(`${this.baseUrl}/obtenerVehiculo/${id}`);
  }
  //Este metodo actualiza el vehiculo
  actualizarVehiculo(id:number,vehiculo:Vehiculo):Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/actualizarVehiculo/${id}`,vehiculo);
   }

  //Este metodo actualiza el vehiculo a no disponible
  deshabilitarVehiculo(id:number):Observable<Vehiculo>{
    return this.httpClient.get<Vehiculo>(`${this.baseUrl}/eliminarVehiculo/${id}`);
   }

   //Este metodo actualiza el vehiculo a disponible
  habilitarVehiculo(id:number):Observable<Vehiculo>{
    return this.httpClient.get<Vehiculo>(`${this.baseUrl}/habilitarVehiculo/${id}`);
   }

  //Este metodo registra el alquiler de un vehiculo
   registrarAlquiler(alquiler:Alquiler):Observable<object>{
     return this.httpClient.post(`${this.baseUrl}/registrarAlquiler`,alquiler)
   }

   // Este metodo crea el vehiculo
   crearVehiculo(vehiculo:Vehiculo):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/registrarVehiculo`,vehiculo)
   }

   //Subir una imagen
   uploadImage(file:File):Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();

    formData.append("file",file);

    const req = new HttpRequest('POST',`${this.baseUrl}/upload`,formData, {
      responseType: 'json'
    });
    return this.httpClient.request(req);
   }

   // Este metodo obtiene las imagenes almacenadas en la base de datos
   getImage(){
    return this.httpClient.get(`${this.baseUrl}/files`);
   }


}
