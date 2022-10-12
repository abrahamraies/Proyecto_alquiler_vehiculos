package com.proyecto.proyecto_alquiler_vehiculos.models;

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
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "idempresa")
    private Long idempresa;
    
    private String nombre;
    private String apellido;
    private String razonsocial;
    private String cuit;
    private String celular;
    private boolean habilitado;
    @Column(name = "correo",unique = true)
    private String correo;
    private String password;
    private int rol = 2;

}
