package com.projeto.energiasolar.view.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.energiasolar.services.ClienteService;
import com.projeto.energiasolar.shared.ClienteDTO;
import com.projeto.energiasolar.view.model.ClienteRequest;
import com.projeto.energiasolar.view.model.ClienteResponse;

@RestController
@RequestMapping("/api/clientes")

public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<ClienteResponse>> obterTodos() {

        List<ClienteDTO> clientes = clienteService.obterTodos();

        ModelMapper mapper = new ModelMapper();

        List<ClienteResponse> resposta = clientes.stream()
                .map(clienteService -> mapper.map(clientes, ClienteResponse.class))
                .collect(Collectors.toList());

        return new ResponseEntity<>(resposta, HttpStatus.OK);

    }

    @GetMapping("/api/clientes/id")
    public ResponseEntity<Optional<ClienteResponse>> obterPorId(@PathVariable Long id) {

        Optional<ClienteDTO> dto = clienteService.obterPorId(id);
        ClienteResponse clientes = new ModelMapper().map(dto.get(), ClienteResponse.class);
        return new ResponseEntity<>(Optional.of(clientes), HttpStatus.OK);

    }

    @PostMapping
    public ResponseEntity<ClienteResponse> adicionar(@Validated @RequestBody ClienteRequest clientesReq) {

        ModelMapper mapper = new ModelMapper();

        ClienteDTO dto = mapper.map(clientesReq, ClienteDTO.class);

        dto = clienteService.adicionar(dto);

        return new ResponseEntity<>(mapper.map(dto, ClienteResponse.class), HttpStatus.CREATED);

    }

    @DeleteMapping("/api/clientes/id")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        clienteService.deletar(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

    @PutMapping("/api/clientes/id")
    public ResponseEntity<ClienteResponse> atualizar(@RequestBody ClienteRequest clientesReq, @PathVariable Long id) {

        ModelMapper mapper = new ModelMapper();
        ClienteDTO dto = mapper.map(clientesReq, ClienteDTO.class);

        dto = clienteService.atualizar(id, dto);

        return new ResponseEntity<ClienteResponse>(
                mapper.map(dto, ClienteResponse.class),
                HttpStatus.OK);
    }

}
