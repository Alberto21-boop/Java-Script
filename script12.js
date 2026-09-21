//Pegue na coleção de estudantes do último exercicio e:
//1. Remova o último estudante da coleção e coloque numa varíavel
//2. Remova o primeiro estudante da coleção e coloque numa varíavel

const nomeAluno = ['Alberto', 'João', 'Maria', 'Peter', 'Tommy'];

const ultimoAluno = nomeAluno.pop();

console.log(ultimoAluno);
console.log(nomeAluno);

const primeiroAluno = nomeAluno.shift();

console.log(primeiroAluno);
console.log(nomeAluno);