// exercicio 4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};

//desestruturacao simples
const { nome, endereco:{cidade}, endereco:{estado} } = empresa

console.log(nome);
console.log(cidade);
console.log(estado);



// exercicio 4.2
const usuario = {nome: 'Sammy', idade: 30}
// function mostraInfo(usuario) {
//     return `${usuario.nome} tem ${usuario.idade} anos.`;
// }
// mostraInfo({ nome: 'Diego', idade: 23 })

// desestruturação em parâmetros
function mostraInfo({nome,idade}){
    return `${nome} tem ${idade} anos`;
}

console.log(mostraInfo(usuario));