export abstract class Elemento {
  private _nome: string;
  constructor(nome: string) {
    this._nome = nome;
  }
  public get getNome() {
    return this._nome;
  }
  abstract combate(elemento: Elemento): number;
}
