"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estacionamento = void 0;
const veiculoGoverno_1 = require("./veiculoGoverno");
const veiculoNaoEncontradoErro_1 = require("../excecoes/veiculoNaoEncontradoErro");
const idDuplicadoErro_1 = require("../excecoes/idDuplicadoErro");
const placaDuplicadaErro_1 = require("../excecoes/placaDuplicadaErro");
const patioLotadoErro_1 = require("../excecoes/patioLotadoErro");
const jaEstaPagoErro_1 = require("../excecoes/jaEstaPagoErro");
const repositorioPatio_1 = require("../repositorio/repositorioPatio");
const repositorioGoverno_1 = require("../repositorio/repositorioGoverno");
const repositorioHistorico_1 = require("../repositorio/repositorioHistorico");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
class Estacionamento {
    _id;
    _valorHora;
    _capacidade;
    _taxaDescontoGov;
    _total = 0;
    _patio = new repositorioPatio_1.RepositorioPatio();
    _governo = new repositorioGoverno_1.RepositorioGoverno();
    _historico = new repositorioHistorico_1.RepositorioHistorico();
    constructor(id, valorHora, capacidade, taxaDescGov) {
        this._id = id;
        this._valorHora = valorHora;
        this._capacidade = capacidade;
        this._taxaDescontoGov = taxaDescGov;
    }
    //getters e setters
    get getId() {
        return this._id;
    }
    get getValorHora() {
        return this._valorHora;
    }
    get getCapacidade() {
        return this._capacidade;
    }
    get getTaxaDescontoGov() {
        return this._taxaDescontoGov;
    }
    get getTotal() {
        return this._total;
    }
    set setTotal(x) {
        this._total = x;
    }
    get getPatio() {
        return this._patio;
    }
    get getGoverno() {
        return this._governo;
    }
    get getHistorico() {
        return this._historico;
    }
    //demais metodos
    idDuplicada(id) {
        //patio
        if (this.getPatio.consultarIndiceVeiculo(id) != -1) {
            return true;
        }
        //governo
        if (this.getGoverno.consultarIndiceVeiculo(id) != -1) {
            return true;
        }
        //historico
        if (this.getHistorico.consultarIndiceVeiculo(id) != -1) {
            return true;
        }
        return false;
    }
    placaDuplicada(placa) {
        //patio
        if (this.getPatio.consultarPlaca(placa)) {
            return true;
        }
        //governo
        if (this.getGoverno.consultarPlaca(placa)) {
            return true;
        }
        //historico
        if (this.getHistorico.consultarPlaca(placa)) {
            return true;
        }
        return false;
    }
    consultarID(id) {
        let veiculoProcurado;
        veiculoProcurado = this.getPatio.consultarVeiculo(id);
        if (!veiculoProcurado) {
            throw new veiculoNaoEncontradoErro_1.VeiculoNaoEncontradoErro("Erro: veiculo nao encontrado."); //exceção
        }
        return veiculoProcurado;
    }
    consultarPlaca(placa) {
        let veiculoProcurado;
        veiculoProcurado = this.getPatio.consultarPlaca(placa);
        if (!veiculoProcurado) {
            throw new veiculoNaoEncontradoErro_1.VeiculoNaoEncontradoErro("Erro: veiculo nao encontrado."); //exceção
        }
        return veiculoProcurado;
    }
    estacionar(veiculo) {
        if (this.getTotal == this.getCapacidade) {
            throw new patioLotadoErro_1.PatioLotadoErro("Erro: patio lotado."); //exceção
        }
        if (this.idDuplicada(veiculo.getId)) {
            throw new idDuplicadoErro_1.IdDuplicadoErro("Erro: ID duplicado no sistema."); //exceção
        }
        if (this.placaDuplicada(veiculo.getPlaca)) {
            throw new placaDuplicadaErro_1.PlacaDuplicadaErro("Erro: placa duplicada no sistema."); //exceção
        }
        veiculo.estacionar((0, moment_1.default)(new Date("2022-12-11T22:00:00"))); //HORA MANUAL PARA TESTE
        this.getPatio.inserirVeiculo(veiculo);
        this.setTotal = this.getTotal + 1;
    }
    retirar(id) {
        let veiculoProcurado = this.consultarID(id); //exceção
        if (veiculoProcurado instanceof veiculoGoverno_1.VeiculoGoverno) { //se do tipo governo 
            if (veiculoProcurado.getPagou) { //se pagou
                this.getHistorico.inserirVeiculo(veiculoProcurado);
            }
            else { //se nao pagou
                this.getGoverno.inserirVeiculo(veiculoProcurado);
            }
            veiculoProcurado.retirar((0, moment_1.default)(new Date()), this.getValorHora); //exceção
        }
        else { //se do tipo normal
            veiculoProcurado.retirar((0, moment_1.default)(new Date()), this.getValorHora); //exceção
            this.getHistorico.inserirVeiculo(veiculoProcurado);
        }
        this.getPatio.excluirVeiculo(id); //remove do patio
        this.setTotal = this.getTotal - 1; //abre vaga no patio
    }
    pagar(id) {
        let veiculoProcurado = this.consultarID(id); //exceção
        veiculoProcurado.pagar(this.getValorHora);
    }
    calcularTempo(id) {
        let tempo = 0;
        let veiculoProcurado = this.consultarID(id); //excecao
        tempo = veiculoProcurado.calcularTempo();
        return tempo;
    }
    calcularValor(id) {
        let valor = 0;
        let veiculoProcurado = this.consultarID(id); //excecao
        valor = veiculoProcurado.calcularValor(this.getValorHora); //exceção
        return valor;
    }
    calcularDebitoGoverno() {
        let arrayAux = this.getGoverno.retornaTodos();
        if (arrayAux.length == 0) {
            throw new jaEstaPagoErro_1.JaEstaPagoErro("Erro: Não há débitos para quitar :)"); //exceção
        }
        let valor = 0;
        for (let i = 0; i < arrayAux.length; i++) {
            valor += arrayAux[i].getValor;
        }
        return valor;
    }
    pagarDebitoGoverno() {
        let arrayAux = this.getGoverno.retornaTodos();
        if (arrayAux.length == 0) {
            throw new jaEstaPagoErro_1.JaEstaPagoErro("Erro: Não há débitos para quitar :)"); //exceção
        }
        for (let i = 0; i < arrayAux.length; i++) {
            arrayAux[i].pagar(this.getValorHora); //exceção
        }
        this.getHistorico.inserirNveiculos(arrayAux);
        this.getGoverno.excluirTodos();
    }
}
exports.Estacionamento = Estacionamento;
