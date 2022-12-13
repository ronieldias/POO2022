"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacaDuplicadaErro = void 0;
const aplicacaoErro_1 = require("./aplicacaoErro");
class PlacaDuplicadaErro extends aplicacaoErro_1.AplicacaoErro {
    constructor(message) {
        super(message);
    }
}
exports.PlacaDuplicadaErro = PlacaDuplicadaErro;
