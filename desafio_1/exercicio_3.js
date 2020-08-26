// exercicio 3.1
const arr = [1,2,3,4,5];
// normal function 
arr.map(function(item) {
    return item + 10;
})
// arrow function
arr.map( item => item + 10);


// exercicio 3.2
const usuario = { nome: 'Diego', idade: 23 };
// normal function
// function mostraIdade(usuario) {
//     return usuario.idade;
// }
// arrow function
const mostraIdade = usuario => usuario.idade;
console.log(mostraIdade(usuario));

// exercicio 3.3
const nome = undefined;
const idade = 26;
// normal function
// function mostraUsuario(nome = 'Diego', idade = 18) {
//  return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

//arrow function
const mostraUsuario = (nome='sammy', idade=0) => ({nome,idade}) ;
console.log(mostraUsuario(nome,idade));
console.log(mostraUsuario(nome));


// exercicio 3.4
// normal function
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}
// arrow function
const promise = () => new Promise(resolve,reject => resolve());