const nome = 'Evandro';
const sobrenome = 'Lougue';
const idade = 32;
const peso = 85;
const altura = 1.75;
let imc;

imc = peso / (altura * altura)
console.log(nome, sobrenome, 'tem', idade, 'anos de idade. Tem', altura + 'm de altura, e pesa', peso + 'kg. Seu IMC é de', imc + '.')

console.log (`${nome} ${sobrenome} está com ${idade} anos de idade. Tem ${altura}m de altura e está pesando ${peso}kg. Seu IMC é de ${imc}.`)