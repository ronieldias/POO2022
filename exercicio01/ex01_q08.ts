class Circulo{
    raio: number;

    constructor(raio:number){
        this.raio = raio;
    }

    calcularArea():number{
        return 3.14 * Math.pow(this.raio, 2);
    }
    
    calcularPerimetro():number{
        return 2* 3.14 * this.raio;
    }
}

let c1 : Circulo;
c1 = new Circulo(3);
console.log(c1.calcularArea())
console.log(c1.calcularPerimetro())

let c2 : Circulo;
c2 = new Circulo(5);
console.log(c2.calcularArea())
console.log(c2.calcularPerimetro())