//Crie uma função que retorne se um número é par ou ímpar.
//Depois, crie um loop de 10 a 20, e exiba se o número atual é ímpar ou par.

function parImpar(numero) {
  if (numero % 2 === 0) {
    return 'par';
  } else {
    return 'ímpar';
  }
}

for (let index = 10; index <= 20; index++) {
  let resultado = parImpar(index);
  console.log(`O número ${index} é ${resultado}`);
}



