class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string, quantidadeCurtidas: number) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return  '[ID] ' + this.id + '\n' +
                '[Texto] ' + this.texto + '\n' +
                '[Likes] ' + this.quantidadeCurtidas + '\n' +
                '*********************************************\n'
    }
}

class Microblog {
    postagens: Postagem[] = [];

    consultar(id: number): Postagem {
        let postagemProcurada !: Postagem;

        for (let p of this.postagens) {
            if (p.id == id) {
                postagemProcurada = p;
                break;
            }
        }
        return postagemProcurada;
    }

    consultarIndice(id: number): number {
        let indice: number = -1;

        for (let i: number = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indice = i;
                break
            }
        }
        return indice;
    }

    incluir(postagemPassada: Postagem): void {
        if (this.consultar(postagemPassada.id)) {
            console.log(`ERRO (MICROBLOD INCLUIR) - id ${postagemPassada.id} já percente a uma postagem existente\n`);
        } else {
            this.postagens.push(postagemPassada);
        }
    }

    excluir(id: number): void {
        let indice: number = this.consultarIndice(id);

        if (indice != -1) {
            for (let i: number = indice; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
    }

    postagemMaisCurtida(): Postagem {
        let maisCurtida: Postagem = this.postagens[0];

        for (let i: number = 1; i < this.postagens.length; i++) {
            if (this.postagens[i].quantidadeCurtidas > maisCurtida.quantidadeCurtidas) {
                maisCurtida = this.postagens[i];
            }
        }
        return maisCurtida;
    }

    curtir(id: number): void {
        let postagem: Postagem = this.consultar(id);

        if (postagem) {
            postagem.curtir();
        }
    }

    toString(): string {
        let concatena: string = '';
        for (let i: number = 0; i < this.postagens.length; i++) {
            concatena += '[ID] ' + this.postagens[i].id + '\n' +
                '[Texto] ' + this.postagens[i].texto + '\n' +
                '[Likes] ' + this.postagens[i].quantidadeCurtidas + '\n' +
                '*********************************************\n'
        }
        return concatena;
    }
}

let p1: Postagem = new Postagem(1, 'Sudo apt get update', 0);
let p2: Postagem = new Postagem(2, 'Sudo apt get upgrade', 0);
let p3: Postagem = new Postagem(3, 'Reboot system now', 0);

let m1: Microblog = new Microblog();

m1.incluir(p1);
m1.incluir(p2);
m1.incluir(p3);


console.log(m1.postagens[3].toString());
