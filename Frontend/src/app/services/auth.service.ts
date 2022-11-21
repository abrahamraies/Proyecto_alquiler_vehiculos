import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cliente, Empresa } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:18080/RentalsVenado";

  constructor(private httpClient : HttpClient) { }

  //Este metodo valida e ingresa un cliente
  loginCliente(correo:String,pass:String):Observable<object>{
    return this.httpClient.get(`${this.baseUrl}/clientes/loginCliente?correo=${correo}&pass=${pass}`)
  }

  //Este metodo registra el alquiler de un cliente
  registrarCliente(cliente:Cliente):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/clientes/registrarCliente`,cliente)
  }

  //Este metodo registra el alquiler de una empresa
  registrarEmpresa(empresa:Empresa):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}/empresas/registrarEmpresa`,empresa)
  }

  //Este metodo valida e ingresa un empresa
  loginEmpresa(correo:String,pass:String):Observable<object>{
    return this.httpClient.get(`${this.baseUrl}/empresas/loginEmpresa?correo=${correo}&pass=${pass}`)
  }

  // Este metodo settea el token
  setToken(input:string){
	  localStorage.setItem("token",input);
  }

  // Este metodo obtiene el token
  getToken():any {
	  return localStorage.getItem("token");
  }

  // Este metodo settea el id del usuario
  SetIdUser(id:any){
	  return localStorage.setItem("iduser",id);
  }

  // Este metodo obtiene el id del usuario
  getIdUser():any{
	  return localStorage.getItem("iduser");
  }

  // Este metodo settea el rol
  setIdRol(id:any){
    return localStorage.setItem("rol",id);
  }

  // Este metodo obtiene el rol
  getIdRol():any{
	  return localStorage.getItem("rol");
  }

  // Este metodo limpia el localStorage
  clear(){
	  localStorage.clear();
  }

  // Este metodo valida si el usuario esta logeado o no
  isLogged(){
	  return localStorage.getItem("token") ? true : false;
  }


}
