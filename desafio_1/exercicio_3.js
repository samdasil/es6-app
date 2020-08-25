const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

// normal function
const workRocket1 = usuarios.filter(function(usuarios){
    return (usuarios.idade > 18 && usuarios.empresa === 'Rocketseat');
})

// arrow function
const workRocket2 = usuarios.filter( usuarios => usuarios.idade > 18 && usuarios.empresa === 'Rocketseat');

console.log(workRocket1);
console.log(workRocket2);