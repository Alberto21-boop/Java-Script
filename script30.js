//1. Defina duas variáveis numéricas `number1` e `number2` e atribua a elas os valores 10 e 20.
//2. Crie uma estrutura condicional que verifique se:
//   - ambos os números são maiores que 10;
//   - pelo menos um dos números é maior que 10;
//   - nenhum dos números é maior que 10.


let number1 = 5;
let number2 = 5;

if (number1 > 10 && number2 > 10) {
    
    console.log('ambos os números são maiores que 10');

} else if (number1 > 10 || number2 > 10) {

    console.log('pelo menos um dos números é maior que 10');

} else if (number1 <= 10 && number2 <= 10){

    console.log('nenhum dos números é maior que 10');

}

