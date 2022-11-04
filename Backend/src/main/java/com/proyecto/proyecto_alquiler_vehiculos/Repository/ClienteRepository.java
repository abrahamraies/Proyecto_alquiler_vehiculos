package com.proyecto.proyecto_alquiler_vehiculos.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.proyecto_alquiler_vehiculos.models.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Long>{

    // Este metodo se encarga de encontrar a un cliente por su correo
    Optional<Cliente> findByCorreo(String correo);

    

}