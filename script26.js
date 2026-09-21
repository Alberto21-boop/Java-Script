//1. Anna, Carl e John são todos da mesma família. Eles têm o mesmo sobrenome: Smith.
//2. Coloque o sobrenome em uma variável chamada lastName.
//3. Crie um array com os nomes completos dos três.
//4. Use o console.table() para exibir o array.

let lastName = 'Smith';

let firstName = [
    'Anna ' + lastName,  
    'Carl ' + lastName, 
    'John ' + lastName
]

console.table(firstName)
//let nomeSobrenome = firstName[0] + lastName + firstName[1] + lastName + firstName[2] + lastName;

//console.table(firstName[0],'' + '',lastName );
//console.table(firstName[1] + '', lastName );
//console.table(firstName[2] + '', lastName );

//console.table(firstName , lastName);

//console.table(firstName,'' + '',lastName );

//console.table([
  //  {categoria: firstName, valores: lastName.join(", ")}
//]);