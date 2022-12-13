"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.naoPagoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class naoPagoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.naoPagoErro = naoPagoErro;
