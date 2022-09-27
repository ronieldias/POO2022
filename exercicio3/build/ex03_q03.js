"use strict";
function tratamento(nome, pronome) {
    if (pronome === void 0) { pronome = 'Sr'; }
    return pronome + ' ' + nome;
}
console.log(tratamento('André')); //Sr André
console.log(tratamento('Catra', 'Mr.')); //Mr. Catra
