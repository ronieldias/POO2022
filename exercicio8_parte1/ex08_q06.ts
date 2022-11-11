import { Conta } from "./conta";
import { Banco } from "./banco";

let conta1 : Conta = new Conta("001", 2500);
let conta2 : Conta = new Conta("002", 100);
let banco : Banco = new Banco();
banco.inserir(conta1);
banco.inserir(conta2);

console.log('C001 Saldo:', banco.consultar('001').getSaldo);
console.log('C002 Saldo:', banco.consultar('002').getSaldo);

/*
    *** Descomente os trechos de código para testar ***
*/

//let conta3 : Conta = new Conta('003', -100); 
//banco.sacar('002', -200); 
//banco.depositar('001', -300); 
//banco.transferir("001", "002", 3000); 

console.log('C001 Saldo:', banco.consultar('001').getSaldo);
console.log('C001 Saldo:', banco.consultar('002').getSaldo);