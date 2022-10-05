package com.proyecto.proyecto_alquiler_vehiculos.models;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idcliente;

    private String nombre;
    private String apellido;
    private String dni;
    private String correo;
    private Date fechanac;
    private String celular;
    private String direccion;
    private String codpostal;
    private String nacionalidad;
    private String password;

}
