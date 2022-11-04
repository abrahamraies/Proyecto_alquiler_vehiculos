package com.proyecto.proyecto_alquiler_vehiculos.controller;

import java.util.List;

import com.proyecto.proyecto_alquiler_vehiculos.repository.ClienteRepository;
import com.proyecto.proyecto_alquiler_vehiculos.exceptions.ResourceNotFoundExceptions;
import com.proyecto.proyecto_alquiler_vehiculos.models.Cliente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/RentalsVenado/clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {


    @Autowired
	private ClienteRepository repositorio;

	//Este metodo lista todos los vehiculos
	@GetMapping("/lista")
	public List<Cliente> listarClientes(){

		return repositorio.findAll();
	}

	// Este metodo se encarga de registrar un nuevo cliente
	@PostMapping("/registrarCliente")
	public Cliente CrearCliente(@RequestBody Cliente nuevoCliente) {

		return repositorio.save(nuevoCliente);
	}

	// Este metodo se encarga de actualizar el estado de un cliente
	@PutMapping("/actualizarCliente/{id}")
	public ResponseEntity<Cliente> ActualizarCliente(@PathVariable Long id, @RequestBody Cliente nuevoCliente) {

		Cliente cliente = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundExceptions("No existe un cliente con el id: " + id));

		cliente.setNombre(nuevoCliente.getNombre());
		cliente.setApellido(nuevoCliente.getApellido());
		cliente.setDni(nuevoCliente.getDni());
		cliente.setCorreo(nuevoCliente.getCorreo());
		cliente.setFechanac(nuevoCliente.getFechanac());
		cliente.setCelular(nuevoCliente.getCelular());
		cliente.setDireccion(nuevoCliente.getDireccion());
		cliente.setCodpostal(nuevoCliente.getCodpostal());
		cliente.setNacionalidad(nuevoCliente.getNacionalidad());
		cliente.setPassword(nuevoCliente.getPassword());

		Cliente clienteActualizado = repositorio.save(cliente);

		return ResponseEntity.ok(clienteActualizado);
	}

	// Este método se encarga de validar e ingresar un cliente
	@GetMapping("/loginCliente")
	public ResponseEntity<Cliente> LoginCliente(String correo, String pass){

		Cliente cliente = repositorio.findByCorreo(correo).orElseThrow(() -> new ResourceNotFoundExceptions("No existe un cliente con el correo ingresado "+ correo));

		if(cliente.getPassword().equals(pass)){
			return ResponseEntity.ok(cliente);
		}else{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}
	
}
