package com.proyecto.proyecto_alquiler_vehiculos.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;

import org.hibernate.annotations.GenericGenerator;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Imagen {
    
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String idimagen;

    private String name;

    private String type;

    @Lob
    private byte[] data;

    public Imagen(String name, String type, byte[] data) {
        this.name = name;
        this.type = type;
        this.data = data;
      }
}
