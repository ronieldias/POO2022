"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoNaoEncontradoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class VeiculoNaoEncontradoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.VeiculoNaoEncontradoErro = VeiculoNaoEncontradoErro;
