"use strict";
class Calculadora {
    constructor(operando1, operando2) {
        this._operando1 = operando1;
        this._operando2 = operando2;
    }
    soma() {
        return this._operando1 + this._operando2;
    }
    subtrai() {
        return this._operando1 - this._operando2;
    }
}
let op1 = new Calculadora(1, 2);
console.log(op1.soma());
console.log(op1.subtrai());
//para o seguinte trecho de código é retornado erro, pois os atributos privados operando1 e operando2 são 
//acessíveis apenas dentro da classe Calculadora
/*
let op2 : Calculadora = new Calculadora(2, 2);
console.log(op2._operando1 + op2._operando2);
console.log(op2._operando1 - op2._operando2);
*/
