# es6-app
Application created during Rocketseat course about ES6+ 

## Modulo 1


## Desafio 1

- [x]  1º Exercício

_Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario"._
_A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como true na classe._

_Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não._

```javascript
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```

- [ ]  2º Exercício

_A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):_

```javascript
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```
- [ ]  2.1 Utilizando o map

_Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]_

- [ ]  2.2 Utilizando o filter

_Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]_

- [ ]  2.3 Utilizando o find

_Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined_

- [ ]  2.4 Unindo operações

_Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:_

```javascript
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
```

- [ ]  3º Exercício

_Converta as funções nos seguintes trechos de código em Arrow Functions:_

```javascript
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});
```

```javascript
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
```

```javascript
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
```

```javascript
// 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
```

- [ ]  4º Exercício

- [ ]  4.1 Desestruturação simples

_A partir do seguinte objeto:_

```javascript
const empresa = {
 nome: 'Rocketseat',
 endereco: {
 cidade: 'Rio do Sul',
 estado: 'SC',
 }
};
```

_Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:_

```javascript
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
```

- [ ]  4.2 Desestruturação em parâmetros

_Na seguinte função:_

```javascript
function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
```
_Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas:_

```javascript
return `${nome} tem ${idade} anos.`;
```

- [ ]  5º Exercício

_Utilizando o operador de rest/spread (...) realize as seguintes operações:_

- [ ]  5.1 Rest

_A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados._

```javascript
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```
_Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:_

```javascript
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
```

- [ ]  5.2 Spread

_A partir do objeto e utilizando o operador spread:_

```javascript
const usuario = {
 nome: 'Diego',
 idade: 23,
 endereco: {
 cidade: 'Rio do Sul',
 uf: 'SC',
 pais: 'Brasil',
 }
};
```
_Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel._
_Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras._

- [ ]  6º Exercício

_Converta o seguinte trecho de código utilizando Template Literals:_

```javascript
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
```

- [ ]  7º Exercício

_Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:_

```javascript
const nome = 'Diego';
const idade = 23;
const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};
```


_Formatação do README.md baseada nas dicas encontradas em: [Medium](https://medium.com/@raullesteves/github-como-fazer-um-readme-md-bonit%C3%A3o-c85c8f154f8)
