import { Pessoa } from "./ex07_q02_extra";

class Funcionario extends Pessoa{
    private _matricula: string;
    private _salario: number;

    constructor(nome: string, sobrenome: string, matricula: string, salario: number){
        super(nome, sobrenome);
        this._matricula =  matricula;

        if(salario >= 0){
            this._salario = salario;
        }else{
            this._salario = 0;
        }   
    }

    public get matricula(): string{
        return this._matricula;
    }
    public get salario(): number{
        return this._salario;
    }

    public calcularSalarioPrimeiraParcela(): number{
        return this.salario * 0.6;
    }
    public calcularSalarioSegundaParcela(): number{
        return this.salario * 0.4;
    }
}

export { Funcionario }