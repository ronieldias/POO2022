import { Conta } from "./conta";
/*
    Situação das contas{
        Conta 001, Saldo 2500.
        Conta 002, Saldo 100.
    }
    Operação{
        Transferir 3000 de Conta 001 para Conta 002 chamando 'conta.transferir()'.
    }
    Na conta de origem o método 'transferir()' chama o método 'sacar()' e por não haver saldo 
    suficiente, é lançada uma exceção. Assim como as linhas de código restantes no método sacar() 
    não são executadas, o mesmo também ocorre para o método transferir(), logo não houve a conclusão 
    do saque na conta origem e nem do déposito na conta destino.
*/
 
let conta1 : Conta = new Conta('001', 2500);
let conta2 : Conta = new Conta('002', 100);

console.log('C001 Saldo:', conta1.getSaldo);
console.log('C002 Saldo:', conta2.getSaldo);

conta1.transferir(conta2, 3000); //lançada a exceção

console.log('C001 Saldo:', conta1.getSaldo);
console.log('C002 Saldo:', conta2.getSaldo);