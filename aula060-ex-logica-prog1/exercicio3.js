function random(min,max) { //dados que vou usar como base
    const r = Math.random() * (max - min) + min; // fórmula para gerar um número aleatório entre min e max
    return Math.floor(r); // qual o valor eu quero retornar para quem pediu a função
}
let min = 0; // aqui estabelece mínimo e máximo
let max = 100;

let rand = random(min, max); // guardando dois números aleatórios
let resultado;

function FizzBuzz() {
    if (rand % 3 === 0 && rand % 5 === 0) {
        console.log(rand)
        return 'FizzBuzz';
    } else if (rand % 3 === 0) {
        console.log(rand)
        return 'Fizz';
    } else if (rand % 5 === 0) {
        console.log(rand)
        return 'Buzz';
    } else if (rand % 3 !== 0 && rand % 5 !== 0) {
        console.log(rand)
        return rand;
    }
}
console.log(Number.isInteger(rand));
console.log(FizzBuzz(rand));