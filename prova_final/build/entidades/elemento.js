"use strict";
class Elemento {
    _nome;
    //private _adversario: Elemento;
    constructor(nome) {
        this._nome = nome;
        //this._adversario = adversario;
    }
    get getNome() {
        return this._nome;
    }
}
class Pedra extends Elemento {
    combate(elemento) {
        if (elemento.getNome == 'pedra') {
            return 0;
        }
        else if (elemento.getNome == 'papel') {
            return -1;
        }
        else {
            return 1;
        }
    }
}
class Papel extends Elemento {
    combate(elemento) {
        if (elemento.getNome == 'pedra') {
            return 1;
        }
        else if (elemento.getNome == 'papel') {
            return 0;
        }
        else {
            return -1;
        }
    }
}
class Tesoura extends Elemento {
    combate(elemento) {
        if (elemento.getNome == 'pedra') {
            return -1;
        }
        else if (elemento.getNome == 'papel') {
            return 1;
        }
        else {
            return 0;
        }
    }
}
//export { Elemento, Pedra, Papel, Tesoura }
