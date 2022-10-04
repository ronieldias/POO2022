"use strict";
var Saudacao = /** @class */ (function () {
    function Saudacao(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    Saudacao.prototype.obterSaudacao = function () {
        return "".concat(this.texto, ", ").concat(this.destinatario);
    };
    return Saudacao;
}());
var s = new Saudacao("Boa noite", "Leticia");
console.log(s.obterSaudacao());
