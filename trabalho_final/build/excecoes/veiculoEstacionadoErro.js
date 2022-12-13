"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoEstacionadoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class VeiculoEstacionadoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoEstacionadoErro = VeiculoEstacionadoErro;
