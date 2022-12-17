import { Elemento } from "./Elemento";

export class Papel extends Elemento {
  public combate(elemento: Elemento): number {
    if (elemento.getNome == "pedra") {
      return 1;
    } else if (elemento.getNome == "papel") {
      return 0;
    } else {
      return -1;
    }
  }
}
