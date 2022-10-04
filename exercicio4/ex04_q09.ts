class Jogador {
    forca: number;
    nivel: number;
    pontosAtuais: number;

    constructor(forca: number, nivel: number, pontosAtuais: number) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontosAtuais = pontosAtuais;
    }

    calcularAtaque(): number {
        return this.forca * this.nivel;
    }

    atacar(jogador: Jogador): void {
        if (jogador.estaVivo() == true) {
            jogador.pontosAtuais = jogador.pontosAtuais - this.calcularAtaque();
        }
    }

    estaVivo(): boolean {
        if (this.pontosAtuais > 0) {
            return true;
        } else {
            return false;
        }
    }

    toString(): string {
        return (`Força: ${this.forca}
                Nível: ${this.nivel}
                Pontos atuais: ${this.pontosAtuais}`);
    }
}

let j1: Jogador = new Jogador(8, 5, 9);
let j2: Jogador = new Jogador(7, 8, 7);
console.log(`J1: ${j1.toString()}`); //estado inicial
console.log(`J2: ${j2.toString()}`); //estado inicial

j1.atacar(j2);
console.log("\n######### Jogador 1 ataca Jogador 2 #########\n");

console.log(`J1: ${j1.toString()}`);
console.log(`J2: ${j2.toString()}`);
