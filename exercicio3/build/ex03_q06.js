"use strict";
function exibir() {
    var letras = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        letras[_i] = arguments[_i];
    }
    var palavra = '';
    for (var _a = 0, letras_1 = letras; _a < letras_1.length; _a++) {
        var letra = letras_1[_a];
        palavra += letra;
    }
    return palavra.split('');
}
console.log(exibir('a', 'b'));
console.log(exibir('a', 'b', 'c'));
console.log(exibir('a', 'b', 'c', 'd'));
