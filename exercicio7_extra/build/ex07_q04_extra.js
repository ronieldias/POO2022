"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const ex07_q03_extra_1 = require("./ex07_q03_extra");
class Professor extends ex07_q03_extra_1.Funcionario {
    constructor(nome, sobrenome, matricula, salario, titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }
    get titulacao() {
        return this._titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
exports.Professor = Professor;
