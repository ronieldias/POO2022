"use strict";
/*
Erro de compilação por conta da ausência de passagem de valor inicial para o construtor na istanciação
do objeto. Para solucionar basta setar um volume inicial para o rádio r
*/
var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = volume;
    }
    return Radio;
}());
var r = new Radio(0);
r.volume = 10;
console.log(r.volume);
