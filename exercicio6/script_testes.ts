import { Conta } from "./ex06_q04";
import { Banco } from "./ex06_q03";

// testes conta
let c1 : Conta = new Conta('1', 1000);
console.log(c1);

console.log('Sacou 1001? ' + c1.sacar(1001));
console.log(c1);

c1.depositar(100);
console.log('Depositou 100');
console.log(c1);

console.log('Sacou 1001? ' + c1.sacar(1001));
console.log(c1);

//***

let c2 : Conta = new Conta('2', 500);

console.log('Transferir 501 de c2 -> c1');
c2.transferir(c1, 501);
console.log(c2);

console.log('Transferir 500 de c2 -> c1');
c2.transferir(c1, 500);
console.log(c2);

//**********************************

//testes banco
let b1: Banco = new Banco();

    b1.inserir(new Conta('1', 100));
    b1.inserir(new Conta('2', 200));
    b1.inserir(new Conta('3', 300));

    console.log(b1);
    console.log(b1.mediaSaldoContas());

//***

let b2: Banco = new Banco();

    b2.inserir(new Conta("10", 1000));
    b2.inserir(new Conta("10", 2000)); //erro - numero de conta ja existente

    console.log(b2.consultar("2")); //nao encontrada
    //console.log(b2.consultarIndice("10")); //erro - metodo privado

    let cTeste = new Conta("2", 3000);
    b2.alterar(cTeste); //nao encontrada
    cTeste.numero = '10';
    b2.alterar(cTeste) //conta 10 alterada
    console.log(b2.consultar("10").saldo); //3000

    b2.inserir(new Conta("30", 5000)); //conta 30 inserida no array de b2
    b2.excluir('1'); //erro conta inexiste
    b2.excluir('10') // conta 10 excluida

    console.log(b2.consultar('30'));

    b2.depositar("3", 100); //erro conta inexiste
    console.log(b2.consultar("30").saldo); //5000
    console.log(b2);
    
//***

let b3 = new Banco();

    b3.inserir(new Conta('5', 100));
    b3.inserir(new Conta('6', 200));
    b3.inserir(new Conta('7', 300));

    console.log(b3);

    b3.depositar('5', 50);
    console.log('Operacao saque 210,00 de conta 6:')
    b3.sacar('6', 210); //erro - saldo insuficiente
    console.log('Operacao saque 150,00 de conta 6:')
    b3.sacar('6', 150); //sucesso
    
    console.log(b3.consultarSaldo('7'));
    console.log(b3);

console.log(b1, b2, b3);