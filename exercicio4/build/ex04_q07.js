"use strict";
var Equipamento = /** @class */ (function () {
    function Equipamento(statusInicial) {
        this.ligado = false;
        this.ligado = statusInicial;
    }
    Equipamento.prototype.liga = function () {
        if (this.estaLigado() == false) {
            this.ligado = true;
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.estaLigado() == true) {
            this.ligado = false;
        }
    };
    Equipamento.prototype.inverte = function () {
        if (this.ligado == false) {
            this.ligado = true;
        }
        else {
            this.ligado = false;
        }
    };
    Equipamento.prototype.estaLigado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
var e = new Equipamento(false);
console.log(e.liga());
console.log(e.estaLigado());
console.log(e.inverte());
console.log(e.estaLigado());
