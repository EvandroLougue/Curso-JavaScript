function random(min,max) { //dados que vou usar como base
    const r = Math.random() * (max - min) + min; // fórmula para gerar um número aleatório entre min e max
    return Math.floor(r); // qual o valor eu quero retornar para quem pediu a função
}
let min = 0; // aqui estabelece mínimo e máximo
let max = 100;

let rand = random(min, max); // guardando dois números aleatórios
let rand2 = random(min, max);

console.log(rand, rand2)

if (rand > rand2) {
    console.log(rand);
} else {
    console.log(rand2);
};