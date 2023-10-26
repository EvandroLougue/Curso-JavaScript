/*
let array = [1,2,3];
array.push(4);
array[0] = 'Evandro';
array = 'Outro'
console.log(array);
*/
/*
const nome01 = 'Evandro';
const sobrenome01 = 'Lougue';
const idade01 = 32;
const nome02 = 'Leandro';
const sobrenome02 = 'Monteiro';
const idade02 = 41;
*/
/*
const pessoa1 = {
    nome: 'Evandro',
    sobrenome: 'Lougue',
    idade: 32,
};
console.log(pessoa1.nome);
*/
/*
function criapessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade,};
}

const pessoa1 = criapessoa('Evandro', 'Lougue', 32);
console.log(pessoa1);
*/

const pessoa1 = {
    nome: 'Evandro',
    sobrenome: 'Lougue',
    idade: 32,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando OI!`)
        console.log(`Minha idade é ${this.idade} anos.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.incrementaIdade();
pessoa1.fala();