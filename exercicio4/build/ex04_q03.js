"use strict";
/*
Erro de compilação por conta da ausência de passagem de valor para o construtor, na istanciação
do objeto. Para solucionar basta setar um valor inicial para volume em r (Radio)
*/
var Radio = /** @class */ (function () {
    function Radio(volume) {
        this.volume = volume;
    }
    return Radio;
}());
/* implementação original
let r: Radio = new Radio(0);
r.volume = 10;
*/
//implementação corrigida
var r = new Radio(0);
r.volume = 10;
console.log(r.volume);
