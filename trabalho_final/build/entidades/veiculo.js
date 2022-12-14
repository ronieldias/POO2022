"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
const jaEstaPagoErro_1 = require("../excecoes/jaEstaPagoErro");
const naoPagoErro_1 = require("../excecoes/naoPagoErro");
const veiculoJaEstacionadoErro_1 = require("../excecoes/veiculoJaEstacionadoErro");
const veiculoNaoEstacionadoErro_1 = require("../excecoes/veiculoNaoEstacionadoErro");
const moment_1 = __importDefault(require("moment"));
const campoObrigatorioErro_1 = require("../excecoes/campoObrigatorioErro");
const anoInvalidoErro_1 = require("../excecoes/anoInvalidoErro");
moment_1.default.locale('pt-br');
class Veiculo {
    _id;
    _placa;
    _modelo;
    _ano;
    _dataHoraEntrada = null;
    _dataHoraSaida = null;
    _estacionado = false;
    _valor = 0;
    _pagou = false;
    constructor(id, placa, modelo, ano) {
        this.validarPlaca(placa);
        this.validarModelo(modelo);
        this.validarAno(ano);
        this._id = id;
        this._placa = placa;
        this._modelo = modelo;
        this._ano = ano;
    }
    // getters e setters
    get getId() {
        return this._id;
    }
    get getPlaca() {
        return this._placa;
    }
    get getModelo() {
        return this._modelo;
    }
    get getAno() {
        return this._ano;
    }
    get getDataHoraEntrada() {
        return this._dataHoraEntrada;
    }
    set setDataHoraEntrada(dataHora) {
        this._dataHoraEntrada = dataHora;
    }
    get getDataHoraSaida() {
        return this._dataHoraSaida;
    }
    set setDataHoraSaida(dataHora) {
        this._dataHoraSaida = dataHora;
    }
    get getEstacionado() {
        return this._estacionado;
    }
    set setEstacionado(x) {
        this._estacionado = x;
    }
    get getPagou() {
        return this._pagou;
    }
    set setPagou(x) {
        this._pagou = x;
    }
    get getValor() {
        return this._valor;
    }
    set setValor(x) {
        this._valor = x;
    }
    estacionar(dataHora) {
        if (this.getEstacionado) {
            throw new veiculoJaEstacionadoErro_1.VeiculoJaEstacionadoErro("Erro: veiculo já está no pátio."); //excecao
        }
        this.setDataHoraEntrada = (0, moment_1.default)(dataHora);
        this.setEstacionado = true;
    }
    retirar(dataHora, valorHora) {
        if (!this.getEstacionado) {
            throw new veiculoNaoEstacionadoErro_1.VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado."); //excecao
        }
        if (!this.getPagou) {
            throw new naoPagoErro_1.naoPagoErro("Erro: realize o pagamento para poder sair"); //excecao
        }
        this.setDataHoraSaida = (0, moment_1.default)(dataHora);
        this.setValor = this.calcularValor(valorHora); //exceção
        this.setEstacionado = false;
    }
    calcularTempo() {
        let entrada = (0, moment_1.default)(this._dataHoraEntrada);
        let saida = (0, moment_1.default)(new Date());
        let duracao = moment_1.default.duration(saida.diff(entrada));
        //return Math.floor(duration.asHours()); //arredonda para baixo //opcao para cima Math.ceil()
        return Math.ceil(duracao.asHours());
    }
    calcularValor(valorHora) {
        if (!this.getEstacionado) {
            throw new veiculoNaoEstacionadoErro_1.VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado."); //excecao
        }
        return this.calcularTempo() * valorHora;
    }
    pagar(valorHora) {
        if (this.getPagou) {
            throw new jaEstaPagoErro_1.JaEstaPagoErro("Erro: debito já quitado."); //excecao
        }
        this.setValor = this.calcularValor(valorHora); //excecao
        this.setPagou = true;
    }
    validarPlaca(placa) {
        if (placa.length < 5) {
            throw new campoObrigatorioErro_1.CampoObrigatorioErro("Erro: campo PLACA não preenchido ou formato inválido\n(Regras: sem espaços e 5+ caracteres).");
        }
        for (let letra of placa) {
            if (letra == ' ') {
                throw new campoObrigatorioErro_1.CampoObrigatorioErro("Erro: campo PLACA não preenchido ou formato inválido\n(Regras: sem espaços e 5+ caracteres).");
            }
        }
    }
    validarModelo(modelo) {
        if (modelo.length < 3) { //vazio, espaço, 3- caracteres
            throw new campoObrigatorioErro_1.CampoObrigatorioErro("Erro: campo MODELO não preenchido ou formato inválido\n(Regras: 3+ caracteres)");
        }
    }
    validarAno(ano) {
        if (isNaN(ano) == true) { //vazio, espaço, letras
            throw new campoObrigatorioErro_1.CampoObrigatorioErro("Erro: campo ANO não preenchido ou formato inválido.");
        }
        if (ano < 1950 || ano > new Date().getUTCFullYear() + 1) { //vide regras
            throw new anoInvalidoErro_1.AnoInvalidoErro("Erro: ano inválido\n(Regras: deve estar entre 1950 e o ano atual +1).");
        }
    }
}
exports.Veiculo = Veiculo;
