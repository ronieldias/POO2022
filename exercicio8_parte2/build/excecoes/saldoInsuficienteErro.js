"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaldoInsuficienteErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class SaldoInsuficienteErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.SaldoInsuficienteErro = SaldoInsuficienteErro;
