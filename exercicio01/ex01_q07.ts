class Retangulo{
    l1: number = 0;
    l2: number = 0;

    constructor(l1: number, l2: number){
        this.l1 = l1;
        this.l2 = l2;
    }

    calcularArea(): number{
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number{
        return this.l1*2 + this.l2*2;
    }
}

let r1 : Retangulo;
r1 = new Retangulo(4,8);
console.log(r1.calcularArea());
console.log(r1.calcularPerimetro());

let r2 : Retangulo;
r2 = new Retangulo(2,3);
console.log(r2.calcularArea());
console.log(r2.calcularPerimetro());