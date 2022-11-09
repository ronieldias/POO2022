"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const ex07_q02_extra_1 = require("./ex07_q02_extra");
class Funcionario extends ex07_q02_extra_1.Pessoa {
    constructor(nome, sobrenome, matricula, salario) {
        super(nome, sobrenome);
        this._matricula = matricula;
        if (salario >= 0) {
            this._salario = salario;
        }
        else {
            this._salario = 0;
        }
    }
    get matricula() {
        return this._matricula;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario * 0.6;
    }
    calcularSalarioSegundaParcela() {
        return this.salario * 0.4;
    }
}
exports.Funcionario = Funcionario;
