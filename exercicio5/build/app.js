"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var ex05_q01_1 = require("./ex05_q01");
var input = (0, prompt_sync_1["default"])();
var b = new ex05_q01_1.Banco();
var opcao = '';
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1. Cadastrar\n' +
        '2. Consultar\n' +
        '3. Sacar\n' +
        '4. Depositar\n' +
        '5. Excluir\n' +
        '6. Transferir\n' +
        '7. Totalizações\n' +
        '0. Sair\n');
    opcao = input("Opção:");
    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "7":
            totalizacoes();
            break;
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function inserir() {
    console.log("\nCadastrar conta\n");
    var numero = input('Digite o número da conta:');
    var conta;
    conta = new ex05_q01_1.Conta(numero, 0);
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar conta\n");
    var numero = input('Digite o número da conta consultada:');
    var contaConsultada = b.consultar(numero);
    if (contaConsultada) {
        console.log(contaConsultada);
    }
    else {
        console.log('Conta nao encontrada\n');
    }
}
function sacar() {
    console.log("\nSacar\n");
    var numero = input('Digite o número da conta:');
    var v = input('Digite o valor:');
    var valor = Number(v);
    b.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar\n");
    var numero = input('Digite o número da conta:');
    var v = input('Digite o valor:');
    var valor = Number(v);
    b.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir\n");
    var numero = input('Digite o número da conta:');
    b.excluir(numero);
}
function transferir() {
    console.log("\nTransferir\n");
    var contaDebitada = input('Digite o número da conta debitada:');
    var contaCreditada = input('Digite o número da conta creditada:');
    var v = input('Digite o valor:');
    var valor = Number(v);
    b.transferir(contaCreditada, contaDebitada, valor);
}
function totalizacoes() {
    console.log("\nTotalizacoes\n");
    console.log('Numero de contas: ' + b.quantidadeContas());
    console.log('Dinheiro total em contas: ' + b.totalDinheiroContas());
    console.log('Media saldo em conras: ' + b.mediaSaldoContas());
    console.log('\nTODAS AS CONTAS');
    for (var _i = 0, _a = b.contas; _i < _a.length; _i++) {
        var conta = _a[_i];
        console.log("[Conta] -> Numero: ".concat(conta.numero, ", Saldo: R$ ").concat(conta.saldo));
    }
}
