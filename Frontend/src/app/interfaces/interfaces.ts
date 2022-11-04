export class Vehiculo {

  idvehiculo:number;
  idempresa:number;
  marca:string;
  modelo:string;
  anio:string;
  disponible: boolean;
  precioalquiler:number;
  imagen:string;
  patente: string;
  tamanio: string;
  categoria: string;
}

export class Cliente {

  nombre:string;
  apellido:string;
  dni:string;
  cuit:string;
  correo:string;
  fechanac:Date;
  celular:string;
  direccion:string;
  codpostal:string;
  nacionalidad:string;
  password:string;
  rol:number;

}

export class Alquiler {
  idregistro:number;
  idcliente:number;
  idvehiculo:number;
  fechainicio:Date;
  fechafin:Date;
}

export class Empresa {
  idempresa:number;
  nombre:string;
  apellido:string;
  razonsocial:string;
  cuit:number;
  celular:number;
  habilitado:boolean;
  correo:string;
  password:string;
}
