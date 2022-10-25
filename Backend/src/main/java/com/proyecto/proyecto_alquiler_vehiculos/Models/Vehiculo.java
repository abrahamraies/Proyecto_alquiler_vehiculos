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
public class Vehiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "idvehiculo")
    private Long idvehiculo;
    
    @Column(name = "idempresa")
    private Long idempresa;
    private String marca;
    private String modelo;
    private int anio;
    private String patente;
    private String tamanio;
    private String categoria;
    private Float precioalquiler;
    private boolean disponible;
    private String imagen;

}
