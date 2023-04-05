package com.proyecto.proyecto_alquiler_vehiculos.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.proyecto.proyecto_alquiler_vehiculos.Models.RegistroAlquiler;
import com.proyecto.proyecto_alquiler_vehiculos.Repository.AlquilerRepository;

@RestController
@RequestMapping("/RentalsVenado")
@CrossOrigin("http://localhost:14200")
public class AlquilerController {

    @Autowired
    private AlquilerRepository alquilerRepository;

    @PostMapping("/registrarAlquiler")
    public RegistroAlquiler registrarAlquiler(@RequestBody RegistroAlquiler nuevoAlquiler) {
        return alquilerRepository.save(nuevoAlquiler);
    }

}
