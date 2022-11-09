"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ex07_q02_1 = require("./ex07_q02");
//letra a
class CalculadoraCientifica extends ex07_q02_1.Calculadora {
    exponenciar() {
        return this.op1 ** this.op2;
    }
}
//letra b
let cc = new CalculadoraCientifica(2, 3);
console.log(cc.exponenciar());
//letra c
//sim, foi necessária a implementação dos métodos de acesso (get) aos atributos privados de Calculadora
