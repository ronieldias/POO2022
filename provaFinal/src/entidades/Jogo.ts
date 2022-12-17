import { Elemento } from "./Elemento";
import { Papel } from "./Papel";
import { Pedra } from "./Pedra";
import { Tesoura } from "./Tesoura";
import { Partida } from "./Partitida";

export class Jogo {
  private combate(elemento1: Elemento, elemento2: Elemento) {
    return elemento1.combate(elemento2);
  }

  public jogar(j1: number, j2: number, partida: Partida): Partida {
    let escolhaJ1!: Elemento;
    switch (j1) {
      case 1:
        escolhaJ1 = new Pedra("pedra");
        break;
      case 2:
        escolhaJ1 = new Papel("papel");
        break;
      case 3:
        escolhaJ1 = new Tesoura("tesoura");
    }
    let escolhaJ2!: Elemento;
    switch (j2) {
      case 1:
        escolhaJ2 = new Pedra("pedra");
        break;
      case 2:
        escolhaJ2 = new Papel("papel");
        break;
      case 3:
        escolhaJ2 = new Tesoura("tesoura");
    }

    let resultado = this.combate(escolhaJ1, escolhaJ2);

    if (resultado === 1) {
      partida.p1++;
    } else if (resultado === -1) {
      partida.p2++;
    } else {
      partida.empate++;
    }
    return partida;
  }
  verificar(partida: Partida): boolean {
    return partida.p1 == 3 || partida.p2 == 3;
  }
}
