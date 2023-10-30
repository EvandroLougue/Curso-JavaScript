const pessoa = {
    nome: 'Evandro',
    sobrenome: 'Lougue',
    idade: 32,
    endereco: {
        rua: 'Sete de Setembro',
        numero: 331,
        bairro: 'Liberdade',
        cidade: 'Esteio - RS'
    }
};
//console.log(pessoa.endereco.rua);

let {nome: nomecliente, idade, endereco: {rua, numero}, sobrenome} = pessoa;

console.log(nomecliente, sobrenome, idade, rua, numero);