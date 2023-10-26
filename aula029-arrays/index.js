const aluno = ['João', 'Maria', 'Mônica', 'Rafael'];

console.log(aluno);
console.log(typeof(aluno));
console.log(aluno[2]);
console.log(aluno.length);

// aluno[1] = 'Marcelo'; // altera elemento

aluno[aluno.length] = 'Evandro'; // adiciona elemento no final da array
aluno.push('Janice'); // adiciona elemento no final da array
aluno.unshift('Leandro'); // adiciona no INÍCIO da array
aluno.pop(); // excluir o último

//let removido = aluno.shift(); // remover o primeiro elemento, E salvar em uma variável
//console.log(aluno);
//console.log(removido);

delete aluno[1];
console.log(aluno);
console.log(aluno.slice(0, -2));

console.log(aluno instanceof Array);