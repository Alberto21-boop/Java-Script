//Crie um array de alunos. Cada aluno é um objeto com os seguintes atributos:
//- name
//- phone number

//Crie uma função que mostre o nome e o telefone de cada aluno.
//Mostre todas as informações dos alunos no console.

const alunos = [
    {
      name: 'Alberto',
      phoneNumber: 11980154366
    },
    {
      name: 'Alina',
      phoneNumber: 11978552669
    },
    {
       name: 'Carlos',
       phoneNumber: 11975152756
    },
    {
       name: 'Ana',
       phoneNumber: 11963147852
    }
]

function pegaAluno(alunos) {
    return `Nome: ${alunos.name} Telefone: ${alunos.phoneNumber}`
}

const listaFormatada = alunos.map(pegaAluno);

console.log(listaFormatada)
