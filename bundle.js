"use strict";

// exercicio 4.1
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
}; //desestruturacao simples

var nome = empresa.nome,
    cidade = empresa.endereco.cidade,
    estado = empresa.endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado); // exercicio 4.2

var usuario = {
  nome: 'Sammy',
  idade: 30
}; // function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })
// desestrutura��o em par�metros

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos");
}

console.log(mostraInfo(usuario));
