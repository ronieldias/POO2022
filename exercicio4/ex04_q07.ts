class Equipamento{
    ligado: boolean = false;

    constructor(statusInicial: boolean){
        this.ligado = statusInicial;
    }

    liga():void{
        if(this.estaLigado() == false){
            this.ligado = true;   
        }
    }
    desliga(): void{
        if(this.estaLigado() == true){
            this.ligado = false;
        }
    }

    inverte(): void{
        if(this.ligado == false){
            this.ligado = true;
        }else{
            this.ligado = false;
        }
    }

    estaLigado(): boolean{
        return this.ligado;
    }
}

let e : Equipamento = new Equipamento(false);

console.log(e.liga());
console.log(e.estaLigado());
console.log(e.inverte());
console.log(e.estaLigado());



