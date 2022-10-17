class Hora{
    constructor(private _hora:number, private _minuto:number, private _segundo:number){}

    public get hora():number{
        return this._hora;
    }

    public get minuto(): number{
        return this._minuto;
    }
    
    public get segundo(): number{
        return this._segundo;
    }

    public horaExata(): string{
        return `${this._hora}:${this._minuto}:${this._segundo}`
    }
}

let relogio : Hora = new Hora(17, 30, 45);

console.log(relogio.horaExata());
