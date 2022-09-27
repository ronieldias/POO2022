function exibir(...letras:string[]):Array<string>{
    let palavra:string = ''

    for(let letra of letras){
        palavra += letra;
    }
    
    return palavra.split('');
}


console.log(exibir('a', 'b'));
console.log(exibir('a', 'b', 'c'));
console.log(exibir('a', 'b', 'c', 'd'));