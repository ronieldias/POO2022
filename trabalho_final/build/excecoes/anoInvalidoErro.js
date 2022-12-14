"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnoInvalidoErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class AnoInvalidoErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.AnoInvalidoErro = AnoInvalidoErro;
