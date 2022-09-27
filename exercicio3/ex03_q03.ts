function tratamento(nome:string, pronome = 'Sr'):string{
    return pronome + ' ' + nome;
}

console.log(tratamento('André')); //Sr André
console.log(tratamento('Catra', 'Mr.')); //Mr. Catra