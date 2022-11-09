"use strict";
class Empregado {
    constructor() {
        this._salario = 500;
    }
    calcularSalario() {
        return this._salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Diarista {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
