//1. Crie uma variável `classification` e atribua um valor entre 1 e 5.
//   Essas são as classificações entre 1 (ruim) e 5 (excelente) que um filme pode ter.

//2. Crie uma estrutura de switch para exibir uma mensagem diferente dependendo da classificação.

let classification = 5;

switch (classification) {
    case 1:
        console.log('ruim de mais');
        break;
    case 2:
        console.log('ruim quase bom, mas ainda é ruim');
        break;
    case 3:
        console.log('bom');
        break;
    case 4:
        console.log('muito bom');
        break;    
    case 5:
        console.log('excelente');
        break;
    default:
        console.log('classificação invalida')
        break;
}