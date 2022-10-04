class Saudacao{
    texto: string;
    destinatario: string;

    constructor(texto: string, destinatario: string){
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): string{
        return `${this.texto}, ${this.destinatario}`;
    }
}

let s : Saudacao = new Saudacao("Boa noite", "Leticia");
console.log(s.obterSaudacao());
