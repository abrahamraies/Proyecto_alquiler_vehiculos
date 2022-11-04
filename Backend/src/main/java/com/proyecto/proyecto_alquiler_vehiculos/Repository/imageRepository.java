package com.proyecto.proyecto_alquiler_vehiculos.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.proyecto_alquiler_vehiculos.models.Imagen;


@Repository
public interface ImageRepository extends JpaRepository<Imagen,String>{
    
}
