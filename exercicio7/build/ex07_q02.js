"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    _op1;
    _op2;
    constructor(op1, op2) {
        this._op1 = op1;
        this._op2 = op2;
    }
    get op1() {
        return this._op1;
    }
    get op2() {
        return this._op2;
    }
    soma() {
        return this._op1 + this._op2;
    }
}
exports.Calculadora = Calculadora;
//let c : Calculadora = new Calculadora(2,3);
//console.log(c.soma());
