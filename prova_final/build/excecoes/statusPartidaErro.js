"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPartidaErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class StatusPartidaErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.StatusPartidaErro = StatusPartidaErro;
