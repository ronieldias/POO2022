"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicacaoErro = void 0;
class AplicacaoErro extends Error {
    constructor(message) {
        super(message);
    }
}
exports.AplicacaoErro = AplicacaoErro;
