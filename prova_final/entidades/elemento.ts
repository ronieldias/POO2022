abstract class Elemento {
    private _nome: string;
    //private _adversario: Elemento;

    constructor(nome: string) {
        this._nome = nome;
        //this._adversario = adversario;
    }

    public get getNome() {
        return this._nome;
    }

    //public get getValorEscolha(){
    //  return this._adversario;
    //}

    abstract combate(elemento: Elemento): number;
}

class Pedra extends Elemento {
    public combate(elemento: Elemento): number {
        if (elemento.getNome == 'pedra') {
            return 0;
        } else if (elemento.getNome == 'papel') {
            return -1;
        } else {
            return 1;
        }
    }
}

class Papel extends Elemento {
    public combate(elemento: Elemento): number {
        if (elemento.getNome == 'pedra') {
            return 1;
        } else if (elemento.getNome == 'papel') {
            return 0;
        } else {
            return -1;
        }
    }
}

class Tesoura extends Elemento {
    public combate(elemento: Elemento): number {
        if (elemento.getNome == 'pedra') {
            return -1;
        } else if (elemento.getNome == 'papel') {
            return 1;
        } else {
            return 0;
        }
    }
}

//export { Elemento, Pedra, Papel, Tesoura }