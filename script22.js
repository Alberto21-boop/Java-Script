//1. Já temos uma variável chamada factor.
//2. Crie um array com 10 valores. Esse array deve representar a tabuada da variável factor.
//3. Exiba o array no console.

//Nota: o resultado deve ser exibido em forma de tabela.

let factor = 5;

const multiplicadorTabuada = [
    factor * 1,
    factor * 2,
    factor * 3,
    factor * 4,
    factor * 5,
    factor * 6,
    factor * 7,
    factor * 8,
    factor * 9,
    factor * 10,
]

const tabuada = [5, 10, 15, 20, 25, 30 ,35, 40, 45, 50];

console.log(tabuada);
console.table(tabuada);
console.table(multiplicadorTabuada)