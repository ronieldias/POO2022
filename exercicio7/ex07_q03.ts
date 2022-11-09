import { Calculadora } from "./ex07_q02";

//letra a
class CalculadoraCientifica extends Calculadora{
    exponenciar(): number{
        return this.op1**this.op2;
    }
}
 
//letra b
let cc : CalculadoraCientifica = new CalculadoraCientifica(2,3);
console.log(cc.exponenciar());

//letra c
//sim, foi necessária a implementação dos métodos de acesso (get) aos atributos privados de Calculadora
