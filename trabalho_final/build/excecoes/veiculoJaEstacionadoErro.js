"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoJaEstacionadoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class VeiculoJaEstacionadoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoJaEstacionadoErro = VeiculoJaEstacionadoErro;
