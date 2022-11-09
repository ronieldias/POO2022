class Calculadora{
    private _op1: number;
    private _op2: number;

    constructor(op1: number, op2: number){
        this._op1 = op1;
        this._op2 = op2;
    }

    public get op1(){
        return this._op1;
    }
    public get op2(){
        return this._op2;
    }

    public soma(): number{
        return this._op1 + this._op2;
    }
}

export { Calculadora }

//let c : Calculadora = new Calculadora(2,3);
//console.log(c.soma());
