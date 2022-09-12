package com.proyecto.proyecto_alquiler_vehiculos.models;

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
    private Long idvehiculo;
    
    private int idempresa;
    private String marca;
    private String modelo;
    private int anio;
    private String patente;
    private String tamanio;
    private boolean transmision;
    private String categoria;
    private Float precioalquiler;
    private boolean disponible;
    private String imagen;

}
