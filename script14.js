//Pegue a coleção de alunos do último exercicio e:
//1. Adicione um novo aluno ao final da coleção
//2. Adicione um novo aluno ao inicio da coleção
//3. Adicione três novos alunos ao final da coleção
//4. Mostre a coleção no console.

let nomeAluno = ['Alberto', 'João', 'Maria', 'Peter', 'Tommy'];

nomeAluno.push('Alice');

console.log(nomeAluno);

nomeAluno.unshift('Vênus');

console.log(nomeAluno);

nomeAluno.push('Mercedes C63');
nomeAluno.push('Mustang');
nomeAluno.push('Camaro');

console.log(nomeAluno);

console.table(nomeAluno);