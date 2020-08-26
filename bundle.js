"use strict";

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //exercicio 2.1
// normal function

/* 
const idade1 = usuarios.map(function({idade}){
    return idade;
});

// arrow function
const idade2 = usuarios.map( ({idade})  =>  idade);

console.log(idade1);
console.log(idade2); 
*/
// exercicio 2.2
// normal function

/* 
const workRocket1 = usuarios.filter(function(usuarios){
    return (usuarios.idade > 18 && usuarios.empresa === 'Rocketseat');
})

// arrow function
const workRocket2 = usuarios.filter( usuarios => usuarios.idade > 18 && usuarios.empresa === 'Rocketseat');

console.log(workRocket1);
console.log(workRocket2); 
*/
// exercicio 2.3
// normal function

/* 
const workRocket1 = usuarios.find(function(usuarios){
    return (usuarios.empresa  === 'Google');
})

// arrow function
const workRocket2 = usuarios.find( usuarios => usuarios.empresa === 'Google');

console.log(workRocket1);
console.log(workRocket2);
*/
// exercicio 2.4
// normal function

var workRocket1 = usuarios.map(function (usuarios) {
  usuarios.idade *= 2;
  return usuarios;
}).filter(function (usuarios) {
  return usuarios.idade <= 50;
});
console.log(workRocket1);
