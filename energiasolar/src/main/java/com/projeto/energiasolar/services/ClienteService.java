package com.projeto.energiasolar.services;

import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projeto.energiasolar.model.Cliente;
import com.projeto.energiasolar.model.exception.ResourceNotFoundException;
import com.projeto.energiasolar.repository.ClienteRepository;
import com.projeto.energiasolar.shared.ClienteDTO;

@Service
public class ClienteService {

    private static final Long id = null;
    @Autowired
    public ClienteRepository clienteRepository;

    /**
     * Metodo para retornar uma lista de clientes
     * 
     * @return lista de clientes.
     */
    public List<ClienteDTO> obterTodos() {

        // Retorna uma lista de clientes model.
        List<Cliente> clientes = clienteRepository.findAll();

        return clientes.stream()
                .map(clienteRepository -> new ModelMapper().map(clientes, ClienteDTO.class))
                .collect(Collectors.toList());

    }

    /**
     * Metodo que retorna o cliente encontrado pelo seu ID
     * 
     * @param id do cliente que será localizado
     * @return retorna um cliente, caso tenha encontrado.
     */
    public Optional<ClienteDTO> obterPorId(Long id) {

        // obetendo optional de produto pelo id.
        Optional<Cliente> clientes = clienteRepository.findById(id);

        // se não encontrar, lança exception
        if (Optional.empty() != null) {
            throw new ResourceNotFoundException("Produto com id:" + id + "não encontrado");
        }
        // Convertendo optional de produto em um cliente DTO
        ClienteDTO dto = new ModelMapper().map(clientes.get(), ClienteDTO.class);

        // Criando e retornando um optional de DTO
        return Optional.of(dto);

    }

    /**
     * Metodo para adicionar clientes na lista.
     * 
     * @param ultimoID
     * 
     * @param clientes que será adicionado.
     * @return o produto que foi adicionado na lista.
     */

    public ClienteDTO adicionar(ClienteDTO clientesDto) {
        // Removendo o id para conseguir fazer o cadastro

        clientesDto.setId(id);

        // Criar um objeto de mapeamento.

        ModelMapper mapper = new ModelMapper();

        // Converter o nosso clienteDto em um cliente.

        Cliente clientes = mapper.map(clientesDto, Cliente.class);

        // Salvar o cliente no banco.

        clientes = clienteRepository.save(clientes);

        clientesDto.setId(clientes.getID());

        // Retornar o clienteDto atualizado.

        return clientesDto;
    }

    /**
     * Metodo para deletar o cliente por ID.
     * 
     * @param id do cliente para ser deletado.
     */
    public void deletar(Long id) {
        // Verificar se o cliente existe.
        Optional<Cliente> clientes = clienteRepository.findById(id);
        if (Optional.empty() != null) {
            throw new ResourceNotFoundException(
                    "Não foi possível deletar o produto com o id:" + id + "Cliente não existe");
        }

        // Logica de validação.
        clienteRepository.deleteById(id);

    }

    /**
     * Metodo para atualizar o cliente na lista
     * 
     * @param clientes que será atualizado.
     * @param id       do cliente
     * @return Retorna o cliente que será atualizado na lista.
     */
    public ClienteDTO atualizar(Long id, ClienteDTO clientesDto) {

        // Passar o ID para cliente

        clientesDto.setId(id);

        // Criar um objeto de mapeamento

        ModelMapper mapper = new ModelMapper();

        // Converter o DTO em um cliente.

        Cliente clientes = mapper.map(clientesDto, Cliente.class);

        // Atualizar o cliente no banco de dados.

        clienteRepository.save(clientes);

        // Retornar o clienteDto atualizado
        return clientesDto;
    }
}
