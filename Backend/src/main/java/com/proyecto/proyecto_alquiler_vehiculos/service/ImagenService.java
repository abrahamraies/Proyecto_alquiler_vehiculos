package com.proyecto.proyecto_alquiler_vehiculos.service;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.proyecto.proyecto_alquiler_vehiculos.models.Imagen;
import com.proyecto.proyecto_alquiler_vehiculos.repository.imageRepository;

@Service
public class ImagenService {
    
    @Autowired
    private imageRepository imagenRepositorio;

    public String store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Imagen FileDB = new Imagen(fileName, file.getContentType(), file.getBytes());

        imagenRepositorio.save(FileDB);

        return FileDB.getIdimagen();
    }

    public Imagen getFile(String id) {
        return imagenRepositorio.findById(id).get();
    }
    
    public Stream<Imagen> getAllFiles() {
        return imagenRepositorio.findAll().stream();
    }

}
