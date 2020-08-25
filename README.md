# es6-app
Application created during Rocketseat course about ES6+ 

## Modulo 1


## Desafio 1

### - [x]  1� Exerc�cio

_Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario"._
_A classe usu�rio deve receber dois par�metros no m�todo construtor, e-mail e senha, e anot�-los em propriedades da classe. A classe "Admin" por sua vez n�o recebe par�metros mas deve repassar os par�metros de e-mail e senha � classe pai e marcar uma propriedade "admin" como true na classe._

_Agora com suas classes formatadas, adicione um m�todo na classe Usuario chamado isAdmin que retorna se o usu�rio � administrador ou n�o baseado na propriedade admin ser true ou n�o._

```javascript
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```

### - [ ]  2� Exerc�cio

_A partir do seguinte vetor e utilizando os m�todos de array (map, reduce, filter e find):_

```javascript
const usuarios = [
 { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
 { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
```
#### - [ ]  2.1 Utilizando o map

_Crie uma vari�vel que contenha todas idades dos usu�rios: [23, 15, 30]_

#### - [ ]  2.2 Utilizando o filter

_Crie uma vari�veis que tenha apenas os usu�rios que trabalham na Rocketseat e com mais de 18 anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]_

#### - [ ]  2.3 Utilizando o find

_Crie uma vari�vel que procura por um usu�rio que trabalhe na empresa Google: undefined_

#### - [ ]  2.4 Unindo opera��es

_Multiplique a idade de todos usu�rios por dois e depois realize um filtro nos usu�rios que possuem no m�ximo 50 anos:_

```javascript
// Resultado:
[
 { nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
 { nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
]
```

### - [ ]  3� Exerc�cio

_Converta as fun��es nos seguintes trechos de c�digo em Arrow Functions:_

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

### - [ ]  4� Exerc�cio

#### - [ ]  4.1 Desestrutura��o simples

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

_Utilize a desestrutura��o para transformar as propriedades nome, cidade e estado em vari�veis, no fim deve ser poss�vel fazer o seguinte:_

```javascript
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
```

#### - [ ]  4.2 Desestrutura��o em par�metros

_Na seguinte fun��o:_

```javascript
function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
}
mostraInfo({ nome: 'Diego', idade: 23 })
```
_Utilize a desestrutura��o nos par�metros da fun��o para buscar o nome e idade do usu�rio separadamente e a fun��o poder retornar apenas:_

```javascript
return `${nome} tem ${idade} anos.`;
```

### - [ ]  5� Exerc�cio

_Utilizando o operador de rest/spread (...) realize as seguintes opera��es:_

#### - [ ]  5.1 Rest

_A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma vari�vel x que recebe a primeira posi��o do vetor e outra vari�vel y que recebe todo restante dos dados._

```javascript
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```
_Crie uma fun��o que recebe in�meros par�metros e retorna a soma de todos eles:_

```javascript
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
```

#### - [ ]  5.2 Spread

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
_Crie uma vari�vel usuario2 que contenha todos os dados do usu�rio por�m com nome Gabriel._
_Crie uma vari�vel usuario3 que contenha todos os dados do usu�rio por�m com cidade Lontras._

### - [ ]  6� Exerc�cio

_Converta o seguinte trecho de c�digo utilizando Template Literals:_

```javascript
const usuario = 'Diego';
const idade = 23;
console.log('O usu�rio ' + usuario + ' possui ' + idade + ' anos');
```

### - [ ]  7� Exerc�cio

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