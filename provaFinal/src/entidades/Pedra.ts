import { Elemento } from "./Elemento";

export class Pedra extends Elemento {
  public combate(elemento: Elemento): number {
    if (elemento.getNome == "pedra") {
      return 0;
    } else if (elemento.getNome == "papel") {
      return -1;
    } else {
      return 1;
    }
  }
}
