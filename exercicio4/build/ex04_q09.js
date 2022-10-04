"use strict";
var Jogador = /** @class */ (function () {
    function Jogador(forca, nivel, pontosAtuais) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }
    Jogador.prototype.calcularAtaque = function () {
        return this.forca * this.nivel;
    };
    Jogador.prototype.atacar = function (jogador) {
        if (jogador.estaVivo() == true) {
            jogador.pontosAtuais = jogador.pontosAtuais - this.calcularAtaque();
        }
    };
    Jogador.prototype.estaVivo = function () {
        if (this.pontosAtuais > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Jogador.prototype.toString = function () {
        return ("For\u00E7a: ".concat(this.forca, "\n                N\u00EDvel: ").concat(this.nivel, "\n                Pontos atuais: ").concat(this.pontosAtuais));
    };
    return Jogador;
}());
var j1 = new Jogador(8, 5, 9);
var j2 = new Jogador(7, 8, 7);
console.log("J1: ".concat(j1.toString())); //estado inicial
console.log("J2: ".concat(j2.toString())); //estado inicial
j1.atacar(j2);
console.log("\n######### Jogador 1 ataca Jogador 2 #########\n");
console.log("J1: ".concat(j1.toString()));
console.log("J2: ".concat(j2.toString()));
