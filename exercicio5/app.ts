import prompt from "prompt-sync";
import { Conta, Banco } from "./ex05_q01";

let input = prompt();
let b: Banco = new Banco();
let opcao: String = '';
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
            totalizacoes();
            break;
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta: Conta;
    conta = new Conta(numero, 0);
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

function totalizacoes(): void{
    console.log("\nTotalizacoes\n");
    console.log('Numero de contas: ' + b.quantidadeContas());
    console.log('Dinheiro total em contas: ' + b.totalDinheiroContas());
    console.log('Media saldo em conras: ' + b.mediaSaldoContas());
    
    console.log('\nTODAS AS CONTAS');
    
    for(let conta of b.contas){
        console.log(`[Conta] -> Numero: ${conta.numero}, Saldo: R$ ${conta.saldo}`);
    }   
}