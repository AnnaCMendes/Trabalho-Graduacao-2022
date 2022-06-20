package com.projeto.energiasolar.view.model;

import com.projeto.energiasolar.model.Cliente;

public class ClienteResponse {
    // #region Atributos
    private String nome;

    private String pessoa;

    private String origem;

    private String tipo;

    private String segmento;

    private String responsavel;

    private String parceiro;

    private String telefone;

    private String localprospccao;

    private String tipoconeccao;

    private String estado;

    private String municipio;

    private String datacadastro;

    private String datavisita;

    private String horario;

    private String valor;

    private Long id;

    // #endregion - END Região

    // #region Get and Stters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getPessoa() {
        return pessoa;
    }

    public void setPessoa(String pessoa) {
        this.pessoa = pessoa;
    }

    public String getOrigem() {
        return origem;
    }

    public void setOrigem(String origem) {
        this.origem = origem;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getSegmento() {
        return segmento;
    }

    public void setSegmento(String segmento) {
        this.segmento = segmento;
    }

    public String getResponsavel() {
        return responsavel;
    }

    public void setResponsavel(String responsavel) {
        this.responsavel = responsavel;
    }

    public String getParceiro() {
        return parceiro;
    }

    public void setParceiro(String parceiro) {
        this.parceiro = parceiro;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getLocalprospccao() {
        return localprospccao;
    }

    public void setLocalprospccao(String localprospccao) {
        this.localprospccao = localprospccao;
    }

    public String getTipoconeccao() {
        return tipoconeccao;
    }

    public void setTipoconeccao(String tipoconeccao) {
        this.tipoconeccao = tipoconeccao;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getMunicipio() {
        return municipio;
    }

    public void setMunicipio(String municipio) {
        this.municipio = municipio;
    }

    public String getDatacadastro() {
        return datacadastro;
    }

    public void setDatacadastro(String datacadastro) {
        this.datacadastro = datacadastro;
    }

    public String getDatavisita() {
        return datavisita;
    }

    public void setDatavisita(String datavisita) {
        this.datavisita = datavisita;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }

    // #endregion Get and Stters

    public void add(Cliente clientes) {
    }

    public void setId(Integer ultimoID) {
    }

    public Integer getID() {
        return null;
    }

    public boolean isEmpty() {
        return false;
    }
}
