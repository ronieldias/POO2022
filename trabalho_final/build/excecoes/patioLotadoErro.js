"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatioLotadoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class PatioLotadoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.PatioLotadoErro = PatioLotadoErro;
