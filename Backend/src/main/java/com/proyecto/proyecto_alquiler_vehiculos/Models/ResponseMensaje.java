package com.proyecto.proyecto_alquiler_vehiculos.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseMensaje {
    private String message;

    public ResponseMensaje(String message) {
        this.message = message;
    }
}
