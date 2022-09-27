function funcao(numeros: Array<number>):string{
    let retorno:string = '';

    numeros.forEach(function(value){
        retorno += value + '-';
    });
    return retorno;
}

console.log(funcao([1, 4, 7, 9])); //1-4-7-9-