import { Banco } from "./entidades/banco";
import { Conta } from "./entidades/conta";
import { ContaImposto } from "./entidades/contaImposto";
import { Poupanca } from "./entidades/contaPoupanca";

let c1 : Conta = new Conta('001', -100);
let c2 : Conta = new Conta('002', 200);
let c3: Poupanca = new Poupanca('003', 300, 0.25);
let c4: ContaImposto = new ContaImposto('004', 400, 0.25);
let b : Banco = new Banco();
b.inserir(c1);
b.inserir(c2);
b.inserir(c3);

//console.log(b);
//if(b.consultar('003')){
//    console.log(b.consultar('003'));
//};

//b.depositar('001', 1100)
console.log(b);



