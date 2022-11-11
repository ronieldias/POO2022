"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
let conta = new conta_1.Conta('001', 2500);
conta.sacar(2000);
console.log(conta.getSaldo);
conta.sacar(1000); //lançada a exceção
console.log(conta.getSaldo);
