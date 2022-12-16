"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RodadaExcedidaErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class RodadaExcedidaErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.RodadaExcedidaErro = RodadaExcedidaErro;
