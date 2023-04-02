package com.proyecto.proyecto_alquiler_vehiculos.Models;

import java.sql.Date;

import javax.persistence.Column;
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
    @Column(name= "idcliente")
    private Long idcliente;

    private String nombre;
    private String apellido;
    private String dni;
    private String cuit;
    @Column(name = "correo",unique = true)
    private String correo;
    private Date fechanac;
    private String celular;
    private String direccion;
    private String codpostal;
    private String nacionalidad;
    private String password;
    private int rol = 1;

}
