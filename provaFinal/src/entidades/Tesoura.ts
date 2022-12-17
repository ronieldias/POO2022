import { Elemento } from "./Elemento";

export class Tesoura extends Elemento {
  public combate(elemento: Elemento): number {
    if (elemento.getNome == "pedra") {
      return -1;
    } else if (elemento.getNome == "papel") {
      return 1;
    } else {
      return 0;
    }
  }
}
