"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampoObrigatorioErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class CampoObrigatorioErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.CampoObrigatorioErro = CampoObrigatorioErro;
