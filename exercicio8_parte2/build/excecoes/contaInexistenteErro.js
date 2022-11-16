"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaInexistenteErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class ContaInexistenteErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.ContaInexistenteErro = ContaInexistenteErro;
