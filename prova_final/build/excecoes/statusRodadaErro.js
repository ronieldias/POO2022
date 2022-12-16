"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusRodadaErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class StatusRodadaErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.StatusRodadaErro = StatusRodadaErro;
