import { Conta } from "./conta";

let conta : Conta = new Conta('001', 2500);
conta.sacar(2000); 
console.log(conta.getSaldo);
conta.sacar(1000); //lançada a exceção
console.log(conta.getSaldo);