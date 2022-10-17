class Calculadora{
    private _operando1: number;
    private _operando2: number;

    constructor(operando1: number, operando2: number){
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    public soma(): number{
        return this._operando1 + this._operando2;
    }

    public subtrai(): number{
        return this._operando1 - this._operando2;
    }
}

let op1 : Calculadora = new Calculadora(1, 2);
console.log(op1.soma());
console.log(op1.subtrai());


//para o seguinte trecho de código é retornado erro, pois os atributos privados operando1 e operando2 são 
//acessíveis apenas dentro da classe Calculadora
/*
let op2 : Calculadora = new Calculadora(2, 2);
console.log(op2._operando1 + op2._operando2);
console.log(op2._operando1 - op2._operando2);
*/

