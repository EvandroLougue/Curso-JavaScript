for (let i = 0; i <= 100; i += 10) {
    console.log('Teste ', i)
}

for (let a = 0; a <= 10; a++) {
    const par = a % 2 === 0 ? 'par' : 'ímpar';
    console.log (a, par)
}

const frutas = ['Maçã', 'Limão', 'Uva'];
console.log(frutas.length) 

for (ini = 0; ini < frutas.length; ini++) {
    console.log(`Índice ${ini}: ${frutas[ini]}`);
}
