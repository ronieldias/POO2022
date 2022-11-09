"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
const contaPoupanca_1 = require("./contaPoupanca");
const contaImposto_1 = require("./contaImposto");
const banco_1 = require("./banco");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let input = (0, prompt_sync_1.default)();
let b = new banco_1.Banco();
let opcao = '';
carregarArquivo();
do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('1. Cadastrar\n' +
        '2. Consultar\n' +
        '3. Sacar\n' +
        '4. Depositar\n' +
        '5. Excluir\n' +
        '6. Transferir\n' +
        '7. Render juros\n' +
        '8. Listar contas\n' +
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
            renderJuros();
            break;
        case "8":
            listarContas();
            break;
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
/*
function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta: Conta;
    conta = new Conta(numero, 0);
    b.inserir(conta);
}
*/
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input('Digite o número da conta:');
    let conta;
    let op = input('Você deseja criar uma conta, poupança ou conta imposto? c/p/i: ').toLowerCase();
    if (op == 'c') {
        conta = new conta_1.Conta(numero, 0);
    }
    else if (op == 'p') {
        conta = new contaPoupanca_1.Poupanca(numero, 0, 0.5);
    }
    else if (op == 'i') {
        conta = new contaImposto_1.ContaImposto(numero, 0, 0.38);
    }
    b.inserir(conta);
}
function consultar() {
    console.log("\nConsultar conta\n");
    let numero = input('Digite o número da conta consultada:');
    let contaConsultada = b.consultar(numero);
    if (contaConsultada) {
        console.log(contaConsultada);
    }
    else {
        console.log('Conta nao encontrada\n');
    }
}
function sacar() {
    console.log("\nSacar\n");
    let numero = input('Digite o número da conta:');
    let v = input('Digite o valor:');
    let valor = Number(v);
    b.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar\n");
    let numero = input('Digite o número da conta:');
    let v = input('Digite o valor:');
    let valor = Number(v);
    b.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir\n");
    let numero = input('Digite o número da conta:');
    b.excluir(numero);
}
function transferir() {
    console.log("\nTransferir\n");
    let contaDebitada = input('Digite o número da conta debitada:');
    let contaCreditada = input('Digite o número da conta creditada:');
    let v = input('Digite o valor:');
    let valor = Number(v);
    b.transferir(contaCreditada, contaDebitada, valor);
}
function renderJuros() {
    console.log("\nRender juros\n");
    let numero = input("Digite o numero da poupança: ");
    b.renderJuros(numero);
}
function listarContas() {
    for (let i = 0; i < b.contas.length; i++) {
        console.log('----------------------------------------------------------');
        console.log(`Numero: ${b.contas[i].numero}\n` +
            `Saldo: ${b.contas[i].saldo}`);
        if (b.contas[i] instanceof contaPoupanca_1.Poupanca) {
            console.log(`Taxa de Juros: ${b.contas[i].taxaJuros}`);
        }
        else if (b.contas[i] instanceof contaImposto_1.ContaImposto) {
            console.log(`Taxa de Desconto: ${b.contas[i].taxaDesconto}`);
        }
    }
    console.log('----------------------------------------------------------');
}
function carregarArquivo() {
    let LineReaderSync = require("line-reader-sync");
    let lrs = new LineReaderSync("./contas.txt");
    console.log("Iniciando leitura de arquivo");
    while (true) {
        let linha = lrs.readline();
        if (linha != null) {
            let arrayContas = linha.split(";");
            let tipoConta = arrayContas[0];
            let numero = arrayContas[1];
            let saldo = parseFloat(arrayContas[2]);
            let conta;
            if (tipoConta == 'C') {
                conta = new conta_1.Conta(numero, saldo);
            }
            else if (tipoConta == 'P') {
                let taxaJuros = parseFloat(arrayContas[3]);
                conta = new contaPoupanca_1.Poupanca(numero, saldo, taxaJuros);
            }
            else if (tipoConta = 'CI') {
                let taxaDesconto = parseFloat(arrayContas[3]);
                conta = new contaImposto_1.ContaImposto(numero, saldo, taxaDesconto);
            }
            b.inserir(conta);
            console.log('Conta lida: ' + conta.numero);
        }
        else {
            console.log('Fim do arquivo');
            break;
        }
    }
}
