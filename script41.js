//Crie um loop for que mostre os números de 0 a 10 no console,
//mas que termine quando o número 5 for encontrado.

let number = 0;

for (let i = 0; i < 10; i++) {
    console.log(number);
    number += 1;
   
    if (number === 6 ) {
        console.log('Numero 5 econtrado')
        break
    }
}