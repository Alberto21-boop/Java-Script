//Crie um script simples que exiba a tabuada do 5.

function taboada(a, b) {
    return (a * b) 
}

for(let index = 1; index <= 10; index++) {
   console.log('5 x', index, '= ',taboada(index, 5))
}