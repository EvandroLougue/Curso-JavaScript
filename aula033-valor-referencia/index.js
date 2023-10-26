/*
Primitivos (imutáveis) = string, number, boolean, undefined, null (bigint, symbol) - VALORES COPIADOS

Referência (mutável) = array, object, function - POR REFERÊNCIA
*/
/*
let a = 'A';
let b = a; // cópia

console.log (a, b);

a = 'Evandro'; 

console.log(a, b);
*/
/*
let a = [1, 2, 3];
let b = [...a];
let c = b; 

console.log(a, b, c);

a.push('cabeca');

console.log(a, b, c);
*/
/*
b.pop();
a.push('Evandro');
console.log (a, b, c);
*/

const a = {
    nome: 'Evandro',
    sobrenome: 'Lougue'
};
const b = {...a};
a.nome = 'João';
console.log(b)