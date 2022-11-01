package com.proyecto.proyecto_alquiler_vehiculos.models;

import java.time.LocalDate;

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
public class RegistroAlquiler {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "idregistroalquiler")
    private Long idregistroalquiler;
    
    private Long idvehiculo;
    private int idcliente;
    private LocalDate fechainicio;
    private LocalDate fechafin;

}
