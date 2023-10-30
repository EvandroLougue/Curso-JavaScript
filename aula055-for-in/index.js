const frutas = ['Pêra', 'Maçã', 'Uva'];

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
*/
for (let i in frutas) {
    console.log(frutas[i]);
}


const pessoa = {
    nome: 'Evandro',
    sobrenome: 'Lougue',
    idade: 32
};

console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade)

console.log(pessoa['nome'], pessoa['sobrenome'], pessoa['idade'])

for (let index in pessoa) {
    console.log(index, pessoa[index])
};