"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const moment_1 = __importDefault(require("moment"));
const jogo_1 = require("./entidades/jogo");
const aplicacaoErro_1 = require("./excecoes/aplicacaoErro");
const valorIvalidoErro_1 = require("./excecoes/valorIvalidoErro");
moment_1.default.locale('pt-br');
let input = (0, prompt_sync_1.default)();
let jogo = new jogo_1.Jogo();
let opcao1 = '';
boasVindas();
do {
    menuPrincipal();
    opcao1 = input("Digite uma opção: ");
    if (opcao1 == '2') {
        let opcao2 = '';
        do {
            menuPartida();
            console.log(jogo.getPartidaAtual.vezDeNome());
            opcao2 = input("Digite uma opcão: ");
            switch (opcao2) {
                case "1":
                    jogar();
                    break;
                case "2":
                    statusPartidaAndamento();
                    break;
                case "3":
                    anularPartidaAndamento();
                    break;
            }
            input("Operação finalizada. Digite <enter>");
        } while (opcao2 != "0");
    }
    else {
        switch (opcao1) {
            case "1":
                criarPartida();
                break;
            case "3":
                historico();
                break;
        }
        input("Operação finalizada. Digite <enter>");
    }
} while (opcao1 != "0");
console.log("Aplicação encerrada");
function criarPartida() {
    let p1Nome = input('Nome do jogador 1: ');
    let p2Nome = input('Nome do jogador 2: ');
    try {
        jogo.novaPartida(p1Nome, p2Nome);
        console.log("Partida criada com sucesso!");
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
}
function historico() {
    console.log('Histórico de partidas encerradas.');
    console.log(jogo.partidasEncerradas());
}
function jogar() {
    console.log(jogo.getPartidaAtual.vezDeNome());
    console.log('ESCOLHA\n(1) Pedra\n(2) Papel\n(3)Tesoura');
    let escolha = input('>>');
    if (escolha != '1' && escolha != '2' && escolha != '3') {
        throw new valorIvalidoErro_1.OpcaoInvalidaErro("Erro: opção inválida de um dos jogadores");
    }
    let vez;
    if (jogo.getPartidaAtual.getRodadaAtual.vezDeNumero() == 0) {
        vez = Math.floor(Math.random() * 2) + 1;
    }
    else {
        vez = jogo.getPartidaAtual.getRodadaAtual.vezDeNumero();
    }
    jogo.getPartidaAtual.jogar(vez, escolha);
    if (jogo.getPartidaAtual.getRodadaAtual.vezDeNumero() == 3) {
        console.log('Fim de rodada');
        console.log('O vencedor foi', jogo.getPartidaAtual.getRodadaAtual.resultado());
    }
}
function statusPartidaAndamento() {
    console.log('Status da partida');
    try {
        console.log(jogo.getPartidaAtual.toStringDetalhado());
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
}
function anularPartidaAndamento() {
    console.log('Anular partida em andamento');
    try {
        jogo.anularPartidaAndamento();
        console.log('anulou');
    }
    catch (e) {
        if (e instanceof aplicacaoErro_1.AplicacaoErro) {
            console.log(e.message);
        }
    }
}
//MENUS
function cabeçalho(titulo) {
    console.log('------------------------------------------------------------');
    console.log(`             *** ${titulo} ***`);
    console.log('------------------------------------------------------------');
}
function rodape() {
    console.log('------------------------------------------------------------');
}
function menuPrincipal() {
    console.clear();
    cabeçalho('PEDRA, PAPEL OU TESOURA?');
    console.log('1. Nova partida\n' +
        '2. Partida em Andamento\n' +
        '3. Histórico de partidas\n' +
        '0. Sair do jogo');
    rodape();
}
function menuPartida() {
    console.clear();
    cabeçalho('MENU PARTIDA');
    console.log('1. Nova rodada\n' +
        '2. Status da partida\n' +
        '3. Anular partida\n' +
        '0. Voltar');
    rodape();
}
function boasVindas() {
    console.clear();
    rodape();
    console.log('############################################################');
    console.log('############################################################');
    console.log('############################################################');
    console.log('#################                        ###################');
    console.log('#################                        ###################');
    console.log('#################       BEM VINDO        ###################');
    console.log('#################           AO           ###################');
    console.log('#################  PEDRA, PAPEL TESOURA  ###################');
    console.log('#################                        ###################');
    console.log('#################                        ###################');
    console.log('############################################################');
    console.log('############################################################');
    console.log('############################################################');
    rodape();
    input('Qualquer tecla para continuar...');
}
