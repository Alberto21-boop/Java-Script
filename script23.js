//1. Pegue o exercício anterior e concatene os valores com o seguinte exemplo:
//5 x 1 = 5
//5 x 2 = 10
//...
//2. Exiba o resultado no console.

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

console.log('5 x 1 =',multiplicadorTabuada[0], '', 
    '' + '5 x 2 =',multiplicadorTabuada[1], '',
    '' + '5 x 3 =',multiplicadorTabuada[2], '' +'', 
    '5 x 4 =', multiplicadorTabuada[3], '' + '',
    '5 x 5 =', multiplicadorTabuada[4], '' + '',
    '5 x 6 =',multiplicadorTabuada[5], '' + '',
    '5 x 7 =', multiplicadorTabuada[6], '' + '',
    '5 x 8 =', multiplicadorTabuada[7], '' + '',
    '5 x 9 =', multiplicadorTabuada[8], '' + '',
    '5 x 10 =',multiplicadorTabuada[9])