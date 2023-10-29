
let nome1 = 'Evandro';
let nome2 = 'Evandro';
var nome3 = 'Evandro Lougue';
const nome4 = 'Evandro Lougue';

const verdadeiro = true;

if (verdadeiro) {
    let nome1 = 'João'; // let tem escopo de bloco { }
    let nome2 = 'João'; // let criando apenas para o bloco
    var nome3 = 'João Santos'; // var é o único que pode ser REDECLARADO dentro e fora de escopo para usar global
    const nome4 = 'João Santos'; // const que só vale dentro do bloco / função
    
    console.log(nome1);
    console.log(nome2);
    console.log(nome3);
    console.log(nome4);
}

console.log(nome1); // LET de dentro de escopo não pode ser usado para GLOBAL
console.log(nome2); //
console.log(nome3); // esse conseguiu pegar o VAR criado dentro da função
console.log(nome4); // CONST não é possível usar no global um feito para escopo de função
