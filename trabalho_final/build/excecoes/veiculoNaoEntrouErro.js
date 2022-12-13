"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoNaoEstacionadoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class VeiculoNaoEstacionadoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoNaoEstacionadoErro = VeiculoNaoEstacionadoErro;
