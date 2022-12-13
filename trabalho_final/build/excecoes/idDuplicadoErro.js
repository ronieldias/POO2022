"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdDuplicadoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class IdDuplicadoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.IdDuplicadoErro = IdDuplicadoErro;
