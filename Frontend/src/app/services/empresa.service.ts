import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  //URL backend
  private baseUrl = "http://localhost:8080/RentalsVenado";

  constructor(private httpClient : HttpClient) { }

  //Este metodo obtiene una solo empresa
  obtenerEmpresa(id:number):Observable<Empresa>{
    return this.httpClient.get<Empresa>(`${this.baseUrl}/empresas/obtenerEmpresa/${id}`);
  }

  //Este metodo actualiza la empresa
  actualizarEmpresa(id:number,empresa:Empresa):Observable<object>{
    return this.httpClient.put(`${this.baseUrl}/empresas/actualizarEmpresa/${id}`,empresa);
   }
}
