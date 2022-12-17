import { Jogo } from "./entidades/Jogo";
import { Partida } from "./entidades/Partitida";
import { ArrayVazio } from "./excecoes/ArrayVazio";
import { EntraInvalida } from "./excecoes/EntradaInvalida";

import promptSync = require("prompt-sync");
import { PartidaNaoIniciada } from "./excecoes/PartidaNaoIniciada";

const prompt: promptSync.Prompt = promptSync();

try {
  let opcao: number;
  let jogo: Jogo = new Jogo();
  let partida: Partida = {
    id: Math.floor(Math.random() * 100),
    p1: 0,
    p2: 0,
    empate: 0,
  };
  let partidas: Partida[] = [];

  do {
    //console.clear();
    console.log('MENU');
    console.log("1 - Nova partida");
    console.log("2 - Abandonar a partida");
    console.log("3 - Histórico");
    console.log("0 - Sair");

    opcao = Number(prompt("Digite uma opção: "));
    if (
      (opcao !== 1 && opcao !== 2 && opcao !== 3 && opcao !== 0) ||
      typeof opcao != "number"
    ) {
      throw new EntraInvalida("ERRO: opção inválida.");
    }

    switch (opcao) {
      case 1:
        console.log("1 - Pedra");
        console.log("2 - Papel");
        console.log("3 - Tesoura");
        const jogador1: number = Number(prompt("Escolha jogador 1: "));
        if (
          (jogador1 != 1 && jogador1 != 2 && jogador1 != 3) ||
          typeof jogador1 != "number"
        ) {
          throw new EntraInvalida("ERRO: opção invalida.");
        }
        const jogador2: number = Number(prompt("Escolhe jogador 2: "));
        if (
          (jogador2 != 1 && jogador2 != 2 && jogador2 != 3) ||
          typeof jogador2 != "number"
        ) {
          throw new EntraInvalida("ERRO: opção invalida.");
        }
        jogo.jogar(jogador1, jogador2, partida);
        console.log(partida);
        if (jogo.verificar(partida) === true) {
          partidas.push(partida);
          partida = {
            id: Math.floor(Math.random() * 100),
            p1: 0,
            p2: 0,
            empate: 0,
          };
        }
        break;
      case 2:
        if(partida.p1 == 0 && partida.p2 == 0 && partida.empate == 0){
          throw new PartidaNaoIniciada('ERRO: nenhuma partida foi iniciada');
        }
        partida = {
          id: Math.floor(Math.random() * 100),
          p1: 0,
          p2: 0,
          empate: 0,
        };
        console.log('Partida abandonada')
        break;
      case 3:
        if(partidas.length == 0){
          throw new ArrayVazio('ERRO: historico sem registro.');
        }
        console.log(partidas);
        break;
    }
  } while (opcao != 0);
} catch (error: any) {
  console.log(error.message);
}
