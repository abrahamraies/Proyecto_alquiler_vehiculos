package com.proyecto.proyecto_alquiler_vehiculos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.proyecto_alquiler_vehiculos.models.Vehiculo;

@Repository
public interface VehiculoRepository extends JpaRepository<Vehiculo,Long>{

    // Este metodo se encarga de devolver todos los vehiculos segun el id de una empresa como parametro
    List<Vehiculo> findAllByidempresa(Long idempresa);

}