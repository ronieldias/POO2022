"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
const veiculoGoverno_1 = require("./veiculoGoverno");
const estacionamento_1 = require("./estacionamento");
const aplicacaoErro_1 = require("../excecoes/aplicacaoErro");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale('pt-br');
let input = (0, prompt_sync_1.default)();
let e = new estacionamento_1.Estacionamento('01', 10.00, 15, 0.25);
let idCont = 0; //controle
let opcao = '';
do {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('             *** 35TAC10N4M3NT0 35TAC10N4R ***');
    console.log('------------------------------------------------------------');
    console.log('1. Estacionar veiculo\n' +
        '2. Retirar veiculo\n' +
        '3. Calcular pagamento\n' +
        '4. Calcular debito governo\n' +
        '5. Pagar\n' +
        '6. Pagar debito governo\n' +
        '7. Consultar veiculo\n' +
        '8. Consultar placa\n' +
        '9. Listar veiculos no patio\n' +
        '10. Situacao patio\n' +
        '11. Histórico\n' +
        '0. Sair');
    console.log('------------------------------------------------------------');
    opcao = input("Digite uma opção: ");
    switch (opcao) {
        case "1":
            estacionar();
            break;
        case "2":
            retirar();
            break;
        case "3":
            calcularPagamento();
            break;
        case "4":
            calcularDebitoGoverno();
            break;
        case "5":
            pagar();
            break;
        case "6":
            pagarDebitoGoverno();
            break;
        case "7":
            consultarVeiculo();
            break;
        case "8":
            consultarPlaca();
            break;
        case "9":
            listarVeiculosPatio();
            break;
        case "10":
            situacaoPatio();
            break;
        case "11":
            historico();
            break;
    }
    input("Operação finalizada. Digite <enter>");
} while (opcao != "0");
console.log("Aplicação encerrada");
function estacionar() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('               *** ESTACIONAR VEICULO ***');
    console.log('------------------------------------------------------------');
    idCont++;
    let veiculoAux = instanciarVeiculo(idCont);
    console.log();
    let resp = input('CONFIRMAR? <S> para SIM <outra tecla> para NAO: ').toUpperCase();
    if (resp == 'S') {
        try {
            e.estacionar(veiculoAux); //captura
            console.log("Estacionado com sucesso!");
        }
        catch (e) {
            if (e instanceof aplicacaoErro_1.AplicacaoErro) {
                idCont--;
                console.log(e.message);
            }
        }
    }
    else {
        idCont--;
        console.log("Cancelado!");
    }
    console.log('------------------------------------------------------------');
}
function retirar() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('               *** RETIRAR VEICULO ***');
    console.log('------------------------------------------------------------');
    let id = input("Digite o ID: ");
    try {
        detalharVeiculo(e.consultarID(id)); //captura
        console.log();
        let resp = input('CONFIRMAR? <S> para SIM <outra tecla> para NAO: ').toUpperCase();
        if (resp == 'S') {
            e.retirar(id); //captura
            console.log("Retirado com sucesso!");
        }
        else {
            console.log("Cancelado.");
        }
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------');
}
function calcularPagamento() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('                *** CALCULAR PAGAMENTO ***');
    console.log('------------------------------------------------------------');
    let id = input("Digite o ID: ");
    try {
        let veiculoAux = e.consultarID(id); //captura
        detalharVeiculo(veiculoAux);
        console.log('\nValor: R$', e.calcularValor(id)); //captura
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------');
}
function calcularDebitoGoverno() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('            *** CALCULAR DEBITO DO GOVERNO ***');
    console.log('------------------------------------------------------------');
    let arrayAux = e.getGoverno.retornaTodos();
    for (let i = 0; i < arrayAux.length; i++) {
        detalharVeiculo(arrayAux[i]);
        console.log('------------------------------------------------------------');
    }
    try {
        console.log('R$', e.calcularDebitoGoverno()); //captura
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------');
}
function pagar() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('                   *** PAGAMENTO ***');
    console.log('------------------------------------------------------------');
    let id = input("Digite o ID: ");
    try {
        detalharVeiculo(e.consultarID(id)); //captura
        console.log();
        let resp = input('CONFIRMAR? <S> para SIM <outra tecla> para NAO: ').toUpperCase();
        if (resp == 'S') {
            e.pagar(id); //captura
            console.log('Sucesso no pagamento!');
        }
        else {
            console.log('Cancelado.');
        }
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------');
}
function pagarDebitoGoverno() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('           *** QUITAR DEBITO DO GOVERNO ***');
    console.log('------------------------------------------------------------');
    try {
        detalharNveiculos(e.getGoverno.retornaTodos());
        e.calcularDebitoGoverno(); //captura
        console.log();
        let resp = input('CONFIRMAR? <S> para SIM <outra tecla> para NAO: ').toUpperCase(); //questao
        if (resp == 'S') {
            e.pagarDebitoGoverno(); //captura
            console.log('Debito quitado com sucesso!');
        }
        else {
            console.log('Cancelado.');
        }
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------');
}
function consultarVeiculo() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('               *** BUSCAR VEICULO ***');
    console.log('------------------------------------------------------------');
    let id = input("Digite o ID: ");
    try {
        detalharVeiculo(e.consultarID(id)); //captura
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------');
}
function consultarPlaca() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('               *** CONSULTAR PLACA ***');
    console.log('------------------------------------------------------------');
    let placa = input('Digite a placa: ').toUpperCase();
    try {
        detalharVeiculo(e.consultarPlaca(placa)); //captura
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------');
}
function listarVeiculosPatio() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('               *** VEICULOS NO PATIO ***');
    console.log('------------------------------------------------------------');
    let arrayAux = e.getPatio.retornaTodos();
    for (let i = 0; i < arrayAux.length; i++) {
        detalharVeiculo(arrayAux[i]);
        console.log('------------------------------------------------------------');
    }
}
function situacaoPatio() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('               *** SITUAÇÃO PATIO ***');
    console.log('------------------------------------------------------------');
    console.log('Capacidade:', e.getCapacidade);
    console.log('Vagas ocupadas:', e.getTotal);
    console.log('Vagas disponiveis:', e.getCapacidade - e.getTotal);
    console.log('Valor/Hora:', e.getValorHora);
    console.log('------------------------------------------------------------');
}
function detalharVeiculo(veiculo) {
    console.log('ID:', veiculo.getId);
    console.log('Placa:', veiculo.getPlaca);
    console.log('Modelo:', veiculo.getModelo);
    console.log('Data e hora de entrada:', veiculo.getDataHoraEntrada);
    if (veiculo.getDataHoraSaida) {
        console.log('Data e hora saída:', veiculo.getDataHoraSaida);
    }
    if (veiculo.calcularTempo()) {
        console.log('Total horas:', veiculo.calcularTempo());
    }
    if (veiculo.getValor > 0) {
        console.log('Valor: R$', veiculo.getValor);
    }
    console.log('Pagou:', veiculo.getPagou);
    console.log('Estacionado: ', veiculo.getEstacionado);
    if (veiculo instanceof veiculoGoverno_1.VeiculoGoverno) {
        console.log('                 *[VEICULO DO GOVERNO]*');
    }
}
function historico() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('                   *** HISTORICO ***');
    console.log('------------------------------------------------------------');
    let arrayAux = e.getHistorico.retornaTodos().sort();
    for (let i = 0; i < arrayAux.length; i++) {
        detalharVeiculo(arrayAux[i]);
        console.log('------------------------------------------------------------');
    }
}
function instanciarVeiculo(num) {
    let veiculoAux;
    console.log("ID:", num);
    let id = num.toString();
    let placa = input("Placa: ").toUpperCase();
    let modelo = input("Modelo: ").toUpperCase();
    let ano = input("Ano: ");
    let doGoveno = input("É do governo? <S> para sim <outra tecla> para nao: ").toUpperCase();
    if (doGoveno == 'S') {
        console.log(`Desconto de ${e.getTaxaDescontoGov * 100}% aplicado`);
        veiculoAux = new veiculoGoverno_1.VeiculoGoverno(id, placa, modelo, new Date(ano), e.getTaxaDescontoGov);
    }
    else {
        veiculoAux = new veiculo_1.Veiculo(id, placa, modelo, new Date(ano));
    }
    return veiculoAux;
}
function detalharNveiculos(veiculos) {
    for (let i = 0; i < veiculos.length; i++) {
        detalharVeiculo(veiculos[i]);
    }
}
