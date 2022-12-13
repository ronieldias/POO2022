"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorInvalidoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class ValorInvalidoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.ValorInvalidoErro = ValorInvalidoErro;
