//Crie um arquivo JavaScript externo e utilize os métodos de seleção do DOM para
//selecionar diferentes elementos existentes no HTML.

//Utilize:

//- getElementById()
//- getElementsByName()
//- getElementsByTagName()
//- getElementsByClassName() ok

//Selecione elementos utilizando o id, o atributo name, a tag e a classe
//presentes no HTML.

//Exiba no console os elementos encontrados para verificar o resultado de cada
//seleção.

const divPai = document.getElementsByTagName('body')
console.log(divPai)

const titulo = document.getElementById('titulo')
console.log(titulo)

const hr = document.getElementById('meu-hr')
console.log(hr)

const paragrafo1 = document.getElementById('paragrafo1')
console.log(paragrafo1)

const paragrafo2 = document.getElementById('paragrafo2')
console.log(paragrafo2)

const corClass1 = document.getElementsByName('azul1')
console.log(corClass1)

const corClass2 = document.getElementById('azul2')
console.log(corClass2)

const paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)

const outro_paragrafo = document.getElementsByClassName('text-green-500')
console.log(outro_paragrafo)
