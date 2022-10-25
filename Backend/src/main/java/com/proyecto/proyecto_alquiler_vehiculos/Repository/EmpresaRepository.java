package com.proyecto.proyecto_alquiler_vehiculos.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.proyecto.proyecto_alquiler_vehiculos.models.Empresa;

@Repository
public interface EmpresaRepository extends JpaRepository<Empresa,Long>{
    
    // Este metodo se encarga de encontrar a una empresa por su correo
    Optional<Empresa> findByCorreo(String correo);

}