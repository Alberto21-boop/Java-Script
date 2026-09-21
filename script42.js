//Crie um array com 4 nomes: John, Paul, Ringo e George.
//Crie um loop que mostre os nomes no console, exceto o nome Paul.

let nomes = ['John', 'Paul', 'Ringo', 'George']
let indice = nomes.indexOf('Paul');

do {
  console.log(nomes);
} while(indice === 'Paul'){
    nomes.splice(indice, 1);
  console.log(nomes)
};

