"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpcaoInvalidaErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class OpcaoInvalidaErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.OpcaoInvalidaErro = OpcaoInvalidaErro;
