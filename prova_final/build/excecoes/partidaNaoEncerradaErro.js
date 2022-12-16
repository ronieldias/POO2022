"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartidaNaoEncerradaErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class PartidaNaoEncerradaErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.PartidaNaoEncerradaErro = PartidaNaoEncerradaErro;
