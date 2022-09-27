"use strict";
function funcao(numeros) {
    var retorno = '';
    numeros.forEach(function (value) {
        retorno += value + '-';
    });
    return retorno;
}
console.log(funcao([1, 4, 7, 9])); //1-4-7-9-
