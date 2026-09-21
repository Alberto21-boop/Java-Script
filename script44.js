//Crie um array com 4 nomes: John, Paul, Ringo e George.
//Crie um loop que mostre os nomes no console, exceto o nome Paul.

const nomes = ['John', 'Paul', 'Ringo', 'George'];

for (let index = 0; index < nomes.length; index++) {
    if (nomes[index] == 'Paul') {
        continue;
    }
  console.log(nomes[index])
}