class Pessoa{
    private _nome: string;
    private _sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    public get nome(): string{
        return this._nome;
    }
    public get sobrenome(): string{
        return this._sobrenome;
    }
    public get nomeCompleto(): string{
        return `${this._nome} ${this._sobrenome}`
    }
}

export { Pessoa }