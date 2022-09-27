"use strict";
function ehPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
;
var pares = function (array) { return array.filter(ehPar); };
console.log(pares(array));
