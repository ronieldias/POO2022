"use strict";
function parImpar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(parImpar(2)); //ŧrue
console.log(parImpar(3)); //false
console.log(parImpar(423)); //false
console.log(parImpar(500)); //true
