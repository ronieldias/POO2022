import { Produto } from "./produto";
import { ProdutoPerecivel } from "./produtoPerecivel";
import { Estoque } from "./estoque";
import { tDate } from "./tDate";

let p1 : Produto = new Produto('1', 'faca', 5, 20);
let p2 : Produto = new Produto('2', 'vassoura', 10, 5);
let p3 : Produto = new Produto('3', 'chinelo', 30, 20);

let pp1 : ProdutoPerecivel = new ProdutoPerecivel('4', 'maçã', 200, 1.5, new tDate(10, 11, 2022)); //valido
let pp2 : ProdutoPerecivel = new ProdutoPerecivel('5', 'iogurte', 150, 3, new tDate(28,10, 2022)); //vencido
let pp3 : ProdutoPerecivel = new ProdutoPerecivel('6', 'carne', 30, 50, new tDate(25,10,2022)); //vencido
let pp4 : ProdutoPerecivel = new ProdutoPerecivel('7', 'mussarela', 500, 30, new tDate(25, 12, 2022)); //valido


let e : Estoque = new Estoque();
e.inserir(p1);
e.inserir(p2);
e.inserir(p3);
e.inserir(pp1);
e.inserir(pp2);
e.inserir(pp3);
e.inserir(pp4);

console.log('CONSULTA E BAIXA DE 100 MAÇÃS');
console.log(e.consultar('4')); //consulta maça
e.darBaixa('4', 100) //dar baixa em 100 maças validas
console.log(e.consultar('4')); // consulta maça

console.log('CONSULTA E EXCLUSAO DO ITEM VASSOURA');
console.log(e.consultar('2')); //consulta vassoura
e.excluir('2') //exclui vassoura do estoque
console.log(e.consultar('2')); //consulta vassoura

//----------------------------------------------------------------
console.log('CONSULTA E BAIXA DE 250 MUSSARELAS VALIDAS');
console.log(e.consultar('7')); //consulta mussarela
e.darBaixa('7', 250); //dar baixa 250 mussarelas validas = SIM
console.log(e.consultar('7')); //consultar mussarela

console.log('CONSULTA E BAIXA DE 15 CARNES VENCIDAS');
console.log(e.consultar('6')); // consultar carne
e.darBaixa('6', 15); // dar baixa 15 carnes vencidas = NAO
console.log(e.consultar('6')); //consultar carne

//----------------------------------------------------------------
console.log('CONSULTA E REPOSICAO DE 50 MAÇÃS VALIDAS');
console.log(e.consultar('4')); //consulta maçã
e.repor('4', 50); //repor 50 maçãs validas = SIM
console.log(e.consultar('4')); //consultar maçã

console.log('CONSULTA E REPOSICAO DE 50 IOGURTES VENCIDOS');
console.log(e.consultar('5')); //consultar iogurte
e.repor('5', 50); //repor 50 iogurtes vencidos = NAO
console.log(e.consultar('5')); //consultar iogurte

//----------------------------------------------------------------
console.log('LISTAGEM DE PRODUTOS PERECIVEIS VENCIDOS');
console.log(e.pereciveisVencidos()); //retorna um Array<ProdutoPerecivel> vencidos
