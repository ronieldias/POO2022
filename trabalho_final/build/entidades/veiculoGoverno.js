"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoGoverno = void 0;
const veiculoNaoEstacionadoErro_1 = require("../excecoes/veiculoNaoEstacionadoErro");
const veiculo_1 = require("./veiculo");
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
class VeiculoGoverno extends veiculo_1.Veiculo {
    _taxaDesconto;
    constructor(id, placa, modelo, ano, taxaDesconto) {
        super(id, placa, modelo, ano);
        this._taxaDesconto = taxaDesconto;
    }
    get getTaxaDesconto() {
        return this._taxaDesconto;
    }
    retirar(dataHora, valorHora) {
        if (!this.getEstacionado) {
            throw new veiculoNaoEstacionadoErro_1.VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado.");
        }
        this.setDataHoraSaida = (0, moment_1.default)(dataHora);
        this.setEstacionado = false;
        this.setValor = this.calcularValor(valorHora);
    }
    calcularValor(valorHora) {
        //if (!this.getEstacionado) {
        //  throw new VeiculoNaoEstacionadoErro("Erro: veiculo nao estacionado.")
        //}
        return (this.calcularTempo() * valorHora) - this.calcularDesconto(valorHora);
    }
    calcularDesconto(valorHora) {
        return (this.calcularTempo() * valorHora) * this.getTaxaDesconto;
    }
}
exports.VeiculoGoverno = VeiculoGoverno;
