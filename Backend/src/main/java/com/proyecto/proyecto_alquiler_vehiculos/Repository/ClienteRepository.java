package com.proyecto.proyecto_alquiler_vehiculos.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.proyecto_alquiler_vehiculos.models.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Long>{

}