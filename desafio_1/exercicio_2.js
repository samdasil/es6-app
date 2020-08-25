const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' }
];

// normal function
const idade1 = usuarios.map(function({idade}){
    return idade;
});

// arrow function
const idade2 = usuarios.map( ({idade})  =>  idade);


console.log(idade1);

console.log(idade2);