function ehPar(numero:number):boolean {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];;

var pares = (array: Array<number>) => array.filter(ehPar);

console.log(pares(array));

