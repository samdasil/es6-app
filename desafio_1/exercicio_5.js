// exercicio 5
/* 
    Utilizando o operador de rest/spread (...) realize as seguintes operações:
*/

// exercicio 5.1
/*
    A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira
    posição do vetor e outra variável y que recebe todo restante dos dados.
*/
const arr = [1,2,3,4,5,6];

const [x,...y] = arr;

console.log(x);
console.log(y);

const somaTudo = (...params) => params.reduce((total, next) => total + next);

console.log(somaTudo(1,2,3,10));

// exercicio 5.2
/* Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel. */
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome:'Gabriel'};
console.log(usuario2);

/* Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras. */
const usuario3 = {...usuario, endereco:{...usuario.endereco,cidade:'Lontras'}};
console.log(usuario3);


