"use strict";
function ehPrimo(numero) {
    var divisores = 0;
    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        return true;
    }
    else {
        return false;
    }
}
console.log(ehPrimo(2)); //true
console.log(ehPrimo(3)); //true
console.log(ehPrimo(11)); //true
console.log(ehPrimo(17)); //true
console.log(ehPrimo(50)); //false
console.log(ehPrimo(20)); //false
console.log(ehPrimo(15)); //false
