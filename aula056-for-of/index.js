const nome = 'Evandro Lougue';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
};

console.log('########');

for (let i in nome) {  // busca direto pelo índice, de 1 em 1
    console.log(nome[i]); // retorna o índice ou chave (strings, arrays, objetos)
};

console.log('########');

for (let valor of nome) { // para objetos iteráveis, como strings, arrays / traz direto o valor, não o índice
    console.log(valor); 
}

console.log('########');

