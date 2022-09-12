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
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idempresa;
    
    private String nombreape;
    private String rznscial;
    private String cuit;
    private String celular;
    private boolean habilitado;

}
