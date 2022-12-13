"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const banco_1 = require("./entidades/banco");
const conta_1 = require("./entidades/conta");
const contaImposto_1 = require("./entidades/contaImposto");
const contaPoupanca_1 = require("./entidades/contaPoupanca");
let c1 = new conta_1.Conta('001', -100);
let c2 = new conta_1.Conta('002', 200);
let c3 = new contaPoupanca_1.Poupanca('003', 300, 0.25);
let c4 = new contaImposto_1.ContaImposto('004', 400, 0.25);
let b = new banco_1.Banco();
b.inserir(c1);
b.inserir(c2);
b.inserir(c3);
//console.log(b);
//if(b.consultar('003')){
//    console.log(b.consultar('003'));
//};
//b.depositar('001', 1100)
console.log(b);
