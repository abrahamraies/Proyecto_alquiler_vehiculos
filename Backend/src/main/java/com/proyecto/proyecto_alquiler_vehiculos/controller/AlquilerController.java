package com.proyecto.proyecto_alquiler_vehiculos.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.proyecto.proyecto_alquiler_vehiculos.Models.RegistroAlquiler;
import com.proyecto.proyecto_alquiler_vehiculos.Repository.AlquilerRepository;





@RestController
@RequestMapping("/RentalsVenado")
@CrossOrigin(origins = "http://localhost:14200")
public class AlquilerController {

	@Autowired
	private AlquilerRepository repositorioAlq;
	
	// Este metodo se encarga de registrar un alquiler
	@PostMapping("/RegistrarAlquiler")
	public RegistroAlquiler GuardarAlquiler(@RequestBody RegistroAlquiler nuevoAlquiler) {

		return repositorioAlq.save(nuevoAlquiler);
	}

}
