import { Veiculo } from "./veiculo";
import { VeiculoGoverno } from "./veiculoGoverno";
import { Estacionamento } from "./estacionamento";
import { AplicacaoErro } from "../excecoes/aplicacaoErro";
import prompt from "prompt-sync";
import moment from "moment";
moment.locale('pt-br');

let input = prompt();
let e: Estacionamento = new Estacionamento('01', 10.00, 3, 0.25);
let opcao: string = '';

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
} while (opcao != "0")
console.log("Aplicação encerrada");

function estacionar() {
    console.clear();
    console.log('------------------------------------------------------------');
    console.log('               *** ESTACIONAR VEICULO ***')
    console.log('------------------------------------------------------------');
    try {
        let veiculoAux = instanciarVeiculo(e.getContID+1); //captura
        console.log();
        let resp = input('CONFIRMAR? <S> para SIM <outra tecla> para NAO: ').toUpperCase();
        if (resp == 'S') {
            e.estacionar(veiculoAux); //captura
            console.log("Estacionado com sucesso!");
        } else {
            console.log("Cancelado!");
        }
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
            console.log(e.message);
        }
    }
    console.log('------------------------------------------------------------')
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
        } else {
            console.log("Cancelado.");
        }
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
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
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
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
    let arrayAux = e.getGoverno.retornaTodos()
    for (let i = 0; i < arrayAux.length; i++) {
        detalharVeiculo(arrayAux[i]);
        console.log('------------------------------------------------------------');
    }
    try {
        console.log('R$', e.calcularDebitoGoverno()); //captura
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
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
        } else {
            console.log('Cancelado.');
        }
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
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
        } else {
            console.log('Cancelado.');
        }
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
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
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
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
    } catch (e: any) {
        if (e instanceof AplicacaoErro) {
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

function detalharVeiculo(veiculo: Veiculo) {
    console.log('ID:', veiculo.getId);
    console.log('Placa:', veiculo.getPlaca);
    console.log('Modelo:', veiculo.getModelo);
    console.log('Ano:', veiculo.getAno);
    console.log('Data e hora de entrada:', veiculo.getDataHoraEntrada);
    if (veiculo.getDataHoraSaida) { console.log('Data e hora saída:', veiculo.getDataHoraSaida); }
    if (veiculo.calcularTempo()) { console.log('Total horas:', veiculo.calcularTempo()); }
    if(veiculo.getValor > 0){console.log('Valor: R$', veiculo.getValor);}
    console.log('Pagou:', veiculo.getPagou);
    console.log('Estacionado:', veiculo.getEstacionado);
    if (veiculo instanceof VeiculoGoverno) { console.log('                 *[VEICULO DO GOVERNO]*'); }
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

function instanciarVeiculo(num: number): Veiculo {
    let veiculoAux: Veiculo;

    console.log("ID:", num);
    let id = num.toString();
    let placa = input("*Placa: ").toUpperCase();
    let modelo = input("*Modelo: ").toUpperCase();
    let ano = parseInt(input("*Ano: "));
    let doGoveno = input("É do governo? <S> para sim <outra tecla> para nao: ").toUpperCase();
    if (doGoveno == 'S') {
        console.log(`Desconto de ${e.getTaxaDescontoGov * 100}% aplicado`);
        veiculoAux = new VeiculoGoverno(id, placa, modelo, ano, e.getTaxaDescontoGov);
    } else {
        veiculoAux = new Veiculo(id, placa, modelo, ano);
    }

    return veiculoAux;
}

function detalharNveiculos(veiculos: Array<Veiculo>) {
    for (let i = 0; i < veiculos.length; i++) {
        detalharVeiculo(veiculos[i]);
    }
}