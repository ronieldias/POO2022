import { Conta } from "./conta";
import { Poupanca } from "./contaPoupanca";
import { ContaImposto } from "./contaImposto";
import { Banco } from "./banco";
import prompt from "prompt-sync";

let input = prompt();
let b: Banco = new Banco();
let opcao: string = '';

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
            break
        case "2":
            consultar();
            break
        case "3":
            sacar();
            break
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
            break
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

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta!: Conta;

    let op: string = input('Você deseja criar uma conta, poupança ou conta imposto? c/p/i: ').toLowerCase();
    if (op == 'c') {
        conta = new Conta(numero, 0);
    } else if (op == 'p') {
        conta = new Poupanca(numero, 0, 0.5);
    } else if (op == 'i') {
        conta = new ContaImposto(numero, 0, 0.38);
    }

    b.inserir(conta);
}

function consultar(): void {
    console.log("\nConsultar conta\n");
    let numero: string = input('Digite o número da conta consultada:');

    let contaConsultada: Conta = b.consultar(numero);

    if (contaConsultada) {
        console.log(contaConsultada);
    } else {
        console.log('Conta nao encontrada\n');
    }
}

function sacar(): void {
    console.log("\nSacar\n");
    let numero: string = input('Digite o número da conta:');
    let v: string = input('Digite o valor:');
    let valor = Number(v);

    b.sacar(numero, valor);
}

function depositar(): void {
    console.log("\nDepositar\n");
    let numero: string = input('Digite o número da conta:');
    let v: string = input('Digite o valor:');
    let valor = Number(v);

    b.depositar(numero, valor);
}

function excluir(): void {
    console.log("\nExcluir\n");
    let numero: string = input('Digite o número da conta:');

    b.excluir(numero);
}

function transferir(): void {
    console.log("\nTransferir\n");
    let contaDebitada: string = input('Digite o número da conta debitada:');
    let contaCreditada: string = input('Digite o número da conta creditada:');
    let v: string = input('Digite o valor:');
    let valor = Number(v);

    b.transferir(contaCreditada, contaDebitada, valor);
}

function renderJuros(): void {
    console.log("\nRender juros\n");
    let numero: string = input("Digite o numero da poupança: ")
    b.renderJuros(numero);

}

function listarContas(): void {
    for (let i = 0; i < b.contas.length; i++) {
        console.log('----------------------------------------------------------');
        console.log(`Numero: ${b.contas[i].numero}\n` +
            `Saldo: ${b.contas[i].saldo}`);
        if (b.contas[i] instanceof Poupanca) {
            console.log(`Taxa de Juros: ${b.contas[i].taxaJuros}`);
        } else if (b.contas[i] instanceof ContaImposto) {
            console.log(`Taxa de Desconto: ${b.contas[i].taxaDesconto}`);
        }
    }
    console.log('----------------------------------------------------------');
}

function carregarArquivo(): void {
    let LineReaderSync = require("line-reader-sync");
    let lrs = new LineReaderSync("./contas.txt");
    console.log("Iniciando leitura de arquivo");

    while (true) {
        let linha: string = lrs.readline();
        if (linha != null) {
            let arrayContas: string[] = linha.split(";");
            let tipoConta: string = arrayContas[0];
            let numero: string = arrayContas[1];
            let saldo: number = parseFloat(arrayContas[2]);
            let conta !: Conta;

            if (tipoConta == 'C') {
                conta = new Conta(numero, saldo);
            } else if (tipoConta == 'P') {
                let taxaJuros: number = parseFloat(arrayContas[3]);
                conta = new Poupanca(numero, saldo, taxaJuros);
            } else if (tipoConta = 'CI') {
                let taxaDesconto: number = parseFloat(arrayContas[3]);
                conta = new ContaImposto(numero, saldo, taxaDesconto);
            }

            b.inserir(conta);
            console.log('Conta lida: ' + conta.numero);
        } else {
            console.log('Fim do arquivo');
            break;
        }
    }
}