import { Pessoa } from "./ex07_q02_extra";
import { Funcionario } from "./ex07_q03_extra";
import { Professor } from "./ex07_q04_extra";

/*
let p1: Pessoa = new Pessoa('Leana', 'Ellen');
console.log(`Pessoa\nNome: ${p1.nome}\nSobrenome: ${p1.sobrenome}\nNome completo: ${p1.nomeCompleto}\n`);

console.log('***********************************************************************');


let f1: Funcionario = new Funcionario('Andre', 'Marques', '123', -1000);
let f2: Funcionario = new Funcionario('Carlos', 'Henrique', '123', 500);
let f3: Funcionario = new Funcionario('Junior', 'Pebinha', '123', 1000);

let arrayFuncionario = [f1, f2, f3]

for (let i = 0; i < arrayFuncionario.length; i++) {

    console.log(`Funcionario: ${arrayFuncionario[i].nomeCompleto}\n` +
        `Matricula: ${arrayFuncionario[i].matricula}\n` +
        `Salário integral: ${arrayFuncionario[i].salario}\n` +
        `Salario parcela 1/2: ${arrayFuncionario[i].calcularSalarioPrimeiraParcela()}\n` +
        `Salario parcela 2/2: ${arrayFuncionario[i].calcularSalarioSegundaParcela()}\n`
    );
}

console.log('***********************************************************************');

let prof1: Professor = new Professor('Gilberto', 'Barros', '123', -1000, 'Doutor');
let prof2: Professor = new Professor('Edvaldo', 'Lages', '123', 500, 'Mestre');
let prof3: Professor = new Professor('Gildásio', 'Guedes', '123', 1000, 'Licenciatura');

let arrayProfessor = [prof1, prof2, prof3]

for (let i = 0; i < arrayProfessor.length; i++) {

    console.log(`Professor: ${arrayProfessor[i].nomeCompleto}\n` +
        `Titulacao: ${arrayProfessor[i].titulacao}\n` +
        `Matricula: ${arrayProfessor[i].matricula}\n` +
        `Salário integral: ${arrayProfessor[i].salario}\n` +
        `Salario parcela 1/2: ${arrayProfessor[i].calcularSalarioPrimeiraParcela()}\n` +
        `Salario parcela 2/2: ${arrayProfessor[i].calcularSalarioSegundaParcela()}\n`
    );
}
*/



let p1: Pessoa = new Pessoa('Leana', 'Ellen');
let f1: Funcionario = new Funcionario('Andre', 'Marques', '123', -1000);
let f2: Funcionario = new Funcionario('Carlos', 'Henrique', '123', 500);
let f3: Funcionario = new Funcionario('Junior', 'Pebinha', '123', 1000);
let prof1: Professor = new Professor('Gilberto', 'Barros', '123', -1000, 'Doutor');
let prof2: Professor = new Professor('Edvaldo', 'Lages', '123', 500, 'Mestre');
let prof3: Professor = new Professor('Gildásio', 'Guedes', '123', 1000, 'Licenciatura');

let array: any = [p1, f1, f2, f3, prof1, prof2, prof3];

for (let i = 0; i < array.length; i++) {
    console.log(`\nNome: ${array[i].nome}\n` +
        `Sobrenome: ${array[i].sobrenome}\n` +
        `Nome Completo: ${array[i].nomeCompleto}`);
                
    if (array[i] instanceof Funcionario || array[i] instanceof Professor) {
        console.log(`Matricula: ${array[i].matricula}\n` +
            `Salário integral: ${array[i].salario}\n` +
            `Salario parcela 1/2: ${array[i].calcularSalarioPrimeiraParcela()}\n` +
            `Salario parcela 2/2: ${array[i].calcularSalarioSegundaParcela()}`);
        if(array[i] instanceof Professor){
            console.log(`Professor titulacao: ${array[i].titulacao}`);   
        }   
    }
}